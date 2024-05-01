import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1 className='text-3xl my-4'>
        Hello {session ? ", " + session.user!.name : "World"}
      </h1>
      <Link
        href='/users'
        className='text-blue-400'
      >
        users
      </Link>
      <ProductCard />
    </main>
  );
}
