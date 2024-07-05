'use client';
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";

export default function Header() {
  // const session = useSession();
  // console.log(session);
  // const status = session.status;
  return(
    <header className="flex items-center justify-between">
      <nav className="flex  items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-red-500 font-semibold text-2xl" href={'/'}>
          SAVORIA
        </Link>
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500
       font-semibold">
        {/*{status === 'authenticated' && (*/}
        {/*  <button*/}
        {/*    // onClick={() => signOut()}*/}
        {/*    onClick={() => {}}*/}
        {/*    className="bg-red-500 rounded-full text-white px-8 py-2">*/}
        {/*    Logout*/}
        {/*  </button>*/}
        {/*)}*/}
        {/*{status !== 'authenticated' && (*/}
        {/*  <>*/}
        {/*    <Link href={'/login'}>Login</Link>*/}
        {/*    <Link href={'/register'}*/}
        {/*      className="bg-red-500 rounded-full text-white px-8 py-2">*/}
        {/*      Register*/}
        {/*    </Link>*/}
        {/*  </>*/}
        {/*)}*/}
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}
              className="bg-red-500 rounded-full text-white px-8 py-2">
          Register
        </Link>
      </nav>
    </header>
  );
}