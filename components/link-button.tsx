import Link from 'next/link';

export default function LinkButton({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <div className="mx-auto w-32 mt-3 p-3 rounded-lg cursor-pointer bg-zinc-900 transition-colors duration-300 hover:bg-zinc-800">
        {children}
      </div>
    </Link>
  );
}
