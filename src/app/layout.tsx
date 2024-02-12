import React from "react";
import RootLayoutClient from "./layout.uc";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

interface Props {
  children: React.ReactNode;
}

export const metaData: Metadata = {
  title: "ai",
  description: "made by Janet",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru en">
      <body className={font.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
