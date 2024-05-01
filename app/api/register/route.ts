import { prisma } from "../../../prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  const raw_body = await request.json();
  const body = schema.safeParse(raw_body);

  if (!body.success) {
    return NextResponse.json({ error: body.error.errors }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: body.data.email },
  });

  if (user) {
    return NextResponse.json({ error: "user already exists" }, { status: 400 });
  }
  const password = await bcrypt.hash(body.data.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.data.email,
      hashedPassword: password,
    },
  });

  return NextResponse.json({ email: newUser.email }, { status: 201 });
}
