import Image from 'next/image';
import Typed from '@/components/typed';
import LinkButton from '@/components/link-button';
import StatusBox from '@/components/status-box';

export default function Page() {
  return (
    <div className="h-screen flex">
      <div className="m-auto text-center">
        <StatusBox />
        <Image
          src="/avatar.png"
          alt="avatar"
          width="200"
          height="200"
          className="mx-auto rounded-full relative z-9999"
        />
        <h1 className="text-3xl">Potato_Chips0706</h1>
        <Typed
          strings={[
            'A Hong Konger.',
            'A full-stack developer.',
            'An ICT student.',
            'A gamer.',
            'An anime lover.'
          ]}
        />
        <div className="flex justify-center space-x-3">
          <LinkButton href="/about">About</LinkButton>
          <LinkButton href="/projects">Links</LinkButton>
        </div>
      </div>
    </div>
  );
}
