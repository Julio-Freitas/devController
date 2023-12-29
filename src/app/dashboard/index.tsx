import { Container } from "@/components";
import { TicketItem } from "./components/ticket";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import PrismaClient from "@/lib/prisma";


export async function Dashboard() {

  const session = await getServerSession(authOptions);
  const tickets = await PrismaClient.ticket.findMany({
    where: { userId: session?.user.id },
    include: {
      customer: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return (
    <Container>
      <main className="mt-2 mb-2">
        <div className="flex items-center justify-between gap-6 ">
          <h1 className="text-3xl font-bold">Chamandos</h1>
          <Link
            passHref
            href="/dashboard/new"
            className="bg-blue-500 px-4 py-1 rounded text-white"
          >
            Abrir Chamado
          </Link>
        </div>

        <table className="min-w-full my-6">
          <thead className="h-8 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="font-medium text-left uppercase pl-2">
                cliente
              </th>
              <th
                scope="col"
                className="font-medium text-left uppercase hidden sm:table-cell align-middle"
              >
                data cadastro
              </th>
              <th scope="col" className="font-medium text-left uppercase">
                status
              </th>
              <th scope="col" className="font-medium text-left uppercase">
                #
              </th>
            </tr>
          </thead>

          <tbody>
            {tickets?.map((ticket) => (
              <TicketItem
                key={ticket.id}
                ticket={ticket}
                customer={ticket.customer}
              />
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  );
}
