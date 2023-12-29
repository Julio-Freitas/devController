'use client'
import { Container } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardHeader() {
  const pathname  = usePathname()
  return (
    <Container>
      <header className="w-full bg-gray-700 my-4 rounded flex  items-center shadow-slate-900 ">
        <Link
          passHref
          href="/dashboard"
          className={`text-white hover:bg-black hover:duration-300 hover:animate-pulse p-3  ${
            pathname === "/dashboard" && "bg-black"
          }`}
        >
          Chamados
        </Link>
        <Link
          passHref
          href="/dashboard/customer"
          className={`text-white hover:bg-black hover:animate-pulse p-3 ${
            pathname === "/dashboard/customer" && "bg-black"
          }`}
        >
          Clientes
        </Link>
      </header>
    </Container>
  );
}
