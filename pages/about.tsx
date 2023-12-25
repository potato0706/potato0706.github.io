import Head from 'next/head';
import { JetBrains_Mono, Noto_Sans_TC } from 'next/font/google';
import StatusBox from '@/components/status-box';
import '@/app/globals.css';

const JetBrainsMono = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
});
const NotoSansTC = Noto_Sans_TC({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-noto-sans-tc'
});

export default function About() {
  return (
    <>
      <Head>
        <title>About / Potato_Chips0706</title>
        <link rel="icon" href="/avatar.png" />
      </Head>
      <style jsx global>
        {`
          html {
            font-family: ${JetBrainsMono.style.fontFamily},
              ${NotoSansTC.style.fontFamily};
          }
        `}
      </style>
      <main>
        <StatusBox />
        <h1 className="text-3xl">About</h1>
      </main>
    </>
  );
}
