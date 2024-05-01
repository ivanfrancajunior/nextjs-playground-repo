import React from "react";
import Image from "next/image";
import james from "./assets/not-found-new.gif";

const NotFoundPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='py-5 text-sm font-mono'>
        The page you are looking for does not exist...
      </p>
      <Image
        width={300}
        height={300}
        className='w-1/2'
        src={james}
        alt='not found'
      />
    </div>
  );
};

export default NotFoundPage;
