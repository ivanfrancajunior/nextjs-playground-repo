import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "../../../prisma/client";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const raw_body = await request.json();

  const body = schema.safeParse(raw_body);

  if (!body.success) {
    return NextResponse.json({ error: body.error.errors }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: body.data?.email },
  });

  if (user) {
    return NextResponse.json({ error: "user already exists" }, { status: 400 });
  }

  const new_user = await prisma.user.create({
    data: { name: body.data?.name, email: body.data?.email },
  });

  return NextResponse.json(new_user, { status: 201 });
}
