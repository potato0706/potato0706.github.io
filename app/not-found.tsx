import type { Metadata } from 'next';
import LinkButton from '@/components/link-button';

export const metadata: Metadata = {
  title: '404 / Potato_Chips0706'
};

export default function NotFound() {
  return (
    <div className="h-screen flex">
      <div className="m-auto text-center">
        <h1 className="text-3xl">404</h1>
        <p>Nothing is here.</p>
        <LinkButton href="/">Go back</LinkButton>
      </div>
    </div>
  );
}
