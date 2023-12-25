import type { Metadata } from 'next';
import { JetBrains_Mono, Noto_Sans_TC, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

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
const NotoSansJP = Noto_Sans_JP({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-noto-sans-jp'
});

export const metadata: Metadata = {
  title: 'Potato_Chips0706',
  icons: '/avatar.png'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${JetBrainsMono.variable} ${NotoSansTC.variable} ${NotoSansJP.variable} overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
