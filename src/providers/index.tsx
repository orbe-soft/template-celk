"use client";

import { type PropsWithChildren } from "react";
import { NextAuthProvider } from "./nextauth";
import { ReactQueryProvider } from "./react-query";
import { ToastProvider } from "./toast";

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextAuthProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
      <ToastProvider />
    </NextAuthProvider>
  );
}
