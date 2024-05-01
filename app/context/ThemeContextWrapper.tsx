"use client";

import React from "react";
import useTheme from "../hooks/useTheme";

const ThemeContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return <div data-theme={theme}>{children}</div>;
};

export default ThemeContextWrapper;
