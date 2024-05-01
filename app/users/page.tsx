import React, { Suspense } from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";

type Props = {
  searchParams: { sortedOrder?: string };
};

const UsersPages = async ({ searchParams: { sortedOrder } }: Props) => {
  return (
    <>
      <h1>Users:</h1>
      <p className='italic text-sm'>
        last update:{new Date().toLocaleTimeString()}
      </p>

      <Link
        href='/users/new'
        className='btn btn-accent  mt-5'
      >
        {" "}
        New user
      </Link>
      <Suspense
        fallback={
          <div className=' flex flex-col gap-5 skeleton py-5px-5 mt-5 h-72 w-full'>
            <div className='skeleton h-12 w-full'></div>
            <div className='skeleton h-12 w-full'></div>
            <div className='skeleton h-12 w-full'></div>
            <div className='skeleton h-12 w-full'></div>
          </div>
        }
      >
        <UsersTable sortedOrder={sortedOrder} />
      </Suspense>
    </>
  );
};

export default UsersPages;
