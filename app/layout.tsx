import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColorBits",
  description:  "Where Colors Come Alive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='{`${inter.className} dark:bg-[#141417]`}' >
        
        <ThemeProvider>
          {children}
          <Analytics />
          </ThemeProvider>
        </body>
    </html>
  );
}
