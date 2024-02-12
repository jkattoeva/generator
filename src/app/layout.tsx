import React from "react";
import RootLayoutClient from "./layout.uc";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru en">
      <body className={font.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
