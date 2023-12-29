import { Container } from "@/components";
import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { customerProps } from "../customer/components/card/type";
import { redirect } from "next/navigation";


export default async function NewTitcket() {
  const session = await getServerSession(authOptions);

  let customers: customerProps[] = [];
  if (session?.user?.id) {
    const getOptions = await prismaClient.customer.findMany({
      where: { userId: session.user.id },
    });

    customers = getOptions;
  }

  const handleRegisterTicket = async (formData: FormData) => {
    'use server'
    const name = formData.get('name') as string;
    const description = formData.get("description") as string;
    const customerId = formData.get("customer") as string;
    const userId = session?.user.id;

    const hasCreate = name && description && customerId && userId;
    if(!hasCreate)  return

    await prismaClient.ticket.create({
      data: {
        name,
        description,
        customerId,
        userId,
        status: 'OPEN'
      },
    });
    redirect('/dashboard/');
  }
  return (
    <Container>
      <main className="flex flex-col mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="bg-black text-white py-2 px-6 rounded-lg flex items-center justify-between hover:scale-105 duration-500"
          >
            <FiArrowLeft />
            Voltar
          </Link>

          <h1 className="text-3xl font-bold">Novo Cliente</h1>
        </div>
        {customers.length === 0 && (
          <Link
            href="/dashboard/customer/new"
            className="w-40 mt-6 bg-white border-2 border-cyan-500 text-blue-500 py-2 rounded-lg flex items-center justify-center hover:scale-105 duration-500"
          >
            Cadastrar cliente
          </Link>
        )}
        <form className="flex flex-col mt-6" action={handleRegisterTicket}>
          <label className="mb-1 font-medium text-lg">Nome do chamado</label>

          <input
            className="border-2 p-2 bm-2 h11 rounded-md"
            type="text"
            placeholder="Digite o nome do chamado"
            required
            name="name"
          />
          <label className="mb-1 font-medium text-lg">Descrição</label>

          <textarea
            className="mb-1 font-medium p-2 w-full border-2 resize-none rounded-md"
            placeholder="Descreve o problema!"
            name="description"
            id=""
            cols={30}
            rows={10}
          />

          <label className="mb-1 font-medium text-lg">
            Selecione um cliente
          </label>

          <select
            className="mb-1 font-medium p-2 h-11 w-full border-2 resize-none rounded-md"
            name="customer"
            id="customer"
          >
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-blue-500 p-2 text-white rounded font-medium uppercase"
          >
            Cadastrar
          </button>
        </form>
      </main>
    </Container>
  );
}
