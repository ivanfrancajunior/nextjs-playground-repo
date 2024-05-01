import React from "react";
type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <aside className='bg-slate-200 p-5 mr-5'>Admin Layout</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
