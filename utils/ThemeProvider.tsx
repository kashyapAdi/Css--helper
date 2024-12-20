"use client"
import { useState, useEffect } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
  
    return (
      <NextThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
        {mounted ? children : null}
      </NextThemeProvider>
    )
  };


export default ThemeProvider;