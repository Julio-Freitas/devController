import { authOptions } from "@/lib/auth";
import PrismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);
  const isNotAuthorized = !session || !session.user;
  if (isNotAuthorized)
    return NextResponse.json({ error: "Not Authorized" }, { status: 401 });

  const { id } = await req.json();

  if (!id)
    return NextResponse.json({ error: "Not Found Customer" }, { status: 401 });

  const findTicket = await PrismaClient.ticket.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
  });

  if (!findTicket)
    return NextResponse.json({ error: "Filed update ticket" }, { status: 400 });

  try {
    await PrismaClient.ticket.update({
        where: { id },
        data: {
            status: 'CLOSE'
        }
    });
    return NextResponse.json({ message: `Delete customer!` });
  } catch (error) {
    return NextResponse.json(
      { error: "Falied delete customer" },
      { status: 401 }
    );
  }
}
