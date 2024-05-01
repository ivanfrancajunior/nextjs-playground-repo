import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });

  if (user) {
    return NextResponse.json(user);
  }

  return NextResponse.json({ error: "user not found" }, { status: 404 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  const updated_user = await prisma.user.update({
    where: { id: Number(params.id) },
    data: { name: body.name },
  });
  return NextResponse.json(updated_user, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  await prisma.user.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({});
}
