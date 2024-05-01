import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

export type Users = {
  id: number;
  username: string;
  email: string;
  name: string;
};

type Props = {
  sortedOrder?: string;
};
const UsersTable = async ({ sortedOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: Users[] = await res.json();

  const data = sort(users).asc(
    sortedOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      <table className='table table-zebra border border-sky-300 mt-5'>
        <thead>
          <tr>
            <th>
              <Link href='/users?sortedOrder=name'>Name</Link>
            </th>
            <th>
              <Link href='/users?sortedOrder=email'>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
