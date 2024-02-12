"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function RootLayoutClient({ children }: Props) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
