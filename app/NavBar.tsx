"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className='p-5 justify-between navbar navbar-center bg-neutral'>
      <Link
        className='text-2xl text-primary'
        href='/'
      >
        {" "}
        MyNext App 4{" "}
      </Link>
      <div>
        <ul className='flex items-center justify-between gap-5 p-3 '>
          <Link
            href={"/"}
            className='cursor-pointer text-white hover:text-orange-400'
          >
            Next.js
          </Link>
          <Link
            href={"/users"}
            className='cursor-pointer text-white hover:text-orange-400'
          >
            Users
          </Link>

          {status === "loading" && (
            <span className='loading loading-spinner text-error'></span>
          )}
          {status === "authenticated" && (
            <div>
              <span className='text-bold text-accent'>
                @{session?.user?.email?.split("@")[0]}
              </span>
              <Link
                className='ml-3'
                href='/api/auth/signout'
              >
                {" "}
                Logout{" "}
              </Link>
            </div>
          )}
          {status === "unauthenticated" && (
            <Link
              href={"/api/auth/signin"}
              className='cursor-pointer text-white hover:text-orange-400'
            >
              Login
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
