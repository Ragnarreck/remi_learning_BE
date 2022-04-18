import { PropsWithChildren } from "react";
import Head from "next/head";
import Link from "next/link";

type Props = PropsWithChildren<{ title?: string }>;

export const MainLayout = ({ children, title = "Next App" }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="h-[50px] inset-x-0 bg-[#00008b99] flex justify-around	items-center ">
        <Link href="/">
          <a className="text-white no-underline">Home</a>
        </Link>
        <Link href="/tasks">
          <a className="text-white no-underline">Tasks</a>
        </Link>
      </nav>
      <main className="mt-[10px]">
        <div className="container mx-auto px-4">{children}</div>
      </main>
    </>
  );
};
