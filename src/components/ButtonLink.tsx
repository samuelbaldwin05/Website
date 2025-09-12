import Link from "next/link";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ href: string; newTab?: boolean }>;

export default function ButtonLink({ href, newTab, children }: Props) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-900 shadow-sm transition hover:bg-gray-50 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      {children}
    </Link>
  );
}
