"use client";

import React, { useState, useEffect, createContext, useContext } from "react";

type ThemeContext = {
  theme?: string;
  toggleTheme?: () => void;
};

const ThemeContext = createContext<ThemeContext>({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (e?: React.MouseEvent) => {
    const nextTheme = theme === "dark" ? "dark" : "light";

    if (nextTheme) {
      setTheme(nextTheme);
    }
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export default useTheme;

//ref: https://medium.com/@tomoradnejad/mastering-ui-theming-in-next-14-ec3b06361917
