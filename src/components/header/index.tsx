"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { FiUser, FiLogOut, FiLoader, FiLock } from "react-icons/fi";
export function Header() {

  const { status, data } = useSession();

  const handdleLogin = async () => await signIn();
  const handdleLogout = async () => await signOut();


  return (
    <header className="w-full flex items-center py-4 bg-white h-20 shadow-sm">
      <div className="flex items-center gap-5 justify-between w-full max-w-7xl mx-auto">
        <Link passHref href="/">
          <h1 className="font-bold text-2xl pl-1 hover:tracking-widest duration-300 uppercase">
            <span className="text-blue-500 pr-2">Dev</span>
            controler
          </h1>
        </Link>

        {status === "loading" && (
          <button className="animate-spin">
            <FiLoader size={26} color="#4b5563" title="entrar" />
          </button>
        )}

        {status === "unauthenticated" && (
          <button type="button" onClick={handdleLogin}>
            <FiLock size={26} color="#4b5563" title="entrar" />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex items-center gap-5">
            <Link passHref href="/dashboard">
              <FiUser size={26} color="#4b5563" title="entrar" />
            </Link>

            <button type="button" onClick={handdleLogout}>
              <FiLogOut size={26} color="#4b5563" title="Sair" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
