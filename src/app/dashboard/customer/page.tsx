import Link from "next/link";
import { getServerSession } from "next-auth";
import { Container } from "@/components";
import { CardCustomer } from "./components/card";
import prismaClient from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { customerProps } from "./components/card/type";

export default async function CustomerPage() {
  const session = await getServerSession(authOptions);
  const customers = await prismaClient.customer.findMany({
    where: {
      userId: session?.user.id,
    },
  });

  const renderList = (customers: customerProps[]) => {

    if (customers.length === 0) return <h1 className="text-2xl py-6 font-medium">Não existe cliente cadastrado...</h1>;

    return customers.map((customer) => (
      <CardCustomer key={customer.id} {...customer} />
    ));
  };

  return (
    <Container>
      <main className="mt-2 mb-2">
        <div className="flex items-center justify-between gap-6 ">
          <h1 className="text-2xl font-bold sm:text-4xl">Meus Clientes</h1>
          <Link
            passHref
            href="/dashboard/customer/new"
            className="bg-blue-500 px-4 py-1 rounded text-white text-sm text-center"
          >
            Novo Cliente
          </Link>
        </div>
        <section className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-3">
          {renderList(customers)}
        </section>
      </main>
    </Container>
  );
}
