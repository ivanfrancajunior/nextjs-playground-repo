import { NextRequest, NextResponse } from "next/server";
import productSchema from "./productsSchema";
import { prisma } from "../../../prisma/client";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const raw_body = await request.json();

  const body = productSchema.safeParse(raw_body);

  if (!body.success)
    return NextResponse.json({ error: body.error.errors }, { status: 400 });

  const new_product = await prisma.product.create({
    data: { name: body.data.name, price: body.data.price },
  });

  return NextResponse.json(new_product, { status: 201 });
}
