import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import PrismaClient from "@/lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const isNotAuthorized = !session || !session.user;
  if (isNotAuthorized)
    return NextResponse.json({ error: "Not Authorized" }, { status: 401 });

  try {
    const { name, email, phone, address, userId } = await req.json();
    await PrismaClient.customer.create({
      data: {
        name,
        email,
        phone,
        address: address ?? "",
        userId,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Fail in create new user!" },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: "CADASTRO" });
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  const isNotAuthorized = !session || !session.user;
  if (isNotAuthorized)
    return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
  const data = await PrismaClient.customer.findMany({
    where: { userId: session.user.id },
  });
  return NextResponse.json({ data, req });
}

export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  const isNotAuthorized = !session || !session.user;

  if (isNotAuthorized)
    return NextResponse.json({ error: "Not Authorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id)
    return NextResponse.json({ error: "Not Found Customer" }, { status: 401 });

  const findTickets = await PrismaClient.ticket.findFirst({ where: { id: session.user.id } });

  if (findTickets) return NextResponse.json(
    { error: "Falied delete customer. This customer has open tickets." },
    { status: 401 }
  );
    try {
      await PrismaClient.customer.delete({
        where: { id },
      });
      return NextResponse.json({ message: `Delete customer!` });
    } catch (error) {
      return NextResponse.json(
        { error: "Falied delete customer" },
        { status: 401 }
      );
    }
}
