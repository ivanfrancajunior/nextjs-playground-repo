"use client";
import React from "react";
import useTheme from "../hooks/useTheme";

const ToogleTheme = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className='w-full flex items-end justify-end pr-5 mt-2'>
      <input
        type='checkbox'
        value={theme}
        onChange={toggleTheme}
        className='toggle theme-controller'
      />
    </div>
  );
};

export default ToogleTheme;
