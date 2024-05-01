"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
  const router = useRouter();

  return (
    <>
      <Link href={"/"}>Back to Home</Link>
      <button
        className='btn btn-accent'
        onClick={() => router.push("/users")}
      >
        Add
      </button>
    </>
  );
};

export default NewUser;
