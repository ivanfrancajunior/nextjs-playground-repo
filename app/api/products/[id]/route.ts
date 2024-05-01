import { NextRequest, NextResponse } from "next/server";
import productSchema from "../productsSchema";
const products = [
  { id: 1, name: "Product 1", price: 7.1 },
  { id: 2, name: "Product 2", price: 7.2 },
  { id: 3, name: "Product 3", price: 7.3 },
  { id: 4, name: "Product 4", price: 7.4 },
  { id: 5, name: "Product 5", price: 7.5 },
  { id: 6, name: "Product 6", price: 7.6 },
  { id: 7, name: "Product 7", price: 7.7 },
];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const product = await products.filter((product) => product.id === params.id);
  if (!product || params.id > 7)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  if (product) return NextResponse.json(product);

  // return NextResponse.json();
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const raw_body = await request.json();

  if (params.id > 7)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  const body = productSchema.safeParse(raw_body);
  if (!body.success)
    return NextResponse.json({ error: body.error.errors }, { status: 400 });

  return NextResponse.json(
    { id: 99, name: body.data.name, price: body.data.price },
    { status: 201 }
  );
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 7)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json({});
}
