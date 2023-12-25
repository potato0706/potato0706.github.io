'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Draggable from 'react-draggable';

type StatusData = {
  readonly data: {
    readonly discord_status: string;
    readonly spotify: {
      readonly track_id: string | null;
      readonly artist: string | null;
      readonly song: string | null;
    } | null;
  };
};

type State = {
  status: string | null;
  song: string | null;
  artist: string | null;
  trackId: string | null;
  time: string;
};

export default function StatusBox({ className }: { className?: string }) {
  const [state, setState] = useState<State>({
    status: 'Loading status...',
    song: null,
    artist: null,
    trackId: null,
    time: new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    })
  });

  const fetchData = useCallback(async () => {
    const response = await fetch(
      'https://api.lanyard.rest/v1/users/589390405548769293'
    );
    const json: StatusData = await response.json();
    const newState: State = {
      status: `Status: ${json.data.discord_status}`,
      song: json.data.spotify?.song || null,
      artist: json.data.spotify?.artist?.replaceAll(';', ' &') || null,
      trackId: json.data.spotify?.track_id || null,
      time: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setState(newState);
  }, []);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 15000); // Fetch data every 15 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [fetchData]);

  const { status, time, song, artist, trackId } = state;

  return (
    <Draggable>
      <div
        className={`border rounded-lg w-64 h-32 text-left p-1 ${className} overflow-auto cursor-move absolute top-0 right-0`}>
        <p>{status}</p>
        <p>It's {time} for me.</p>
        {song && artist && trackId && (
          <p>
            Listening to{' '}
            <Link
              href={`https://open.spotify.com/track/${trackId}`}
              className="underline">
              {song} by {artist}
            </Link>
          </p>
        )}
      </div>
    </Draggable>
  );
}
