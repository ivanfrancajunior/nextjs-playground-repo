import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};
const UserDetails = ({ params: { id } }: Props) => {
  if (Number(id) > 5) notFound();
  return <div>USER ID: {id}</div>;
};

export default UserDetails;
