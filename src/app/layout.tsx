import type { Metadata } from "next";
import { inter } from "@/fonts";
import type { PropsWithChildren } from "react";
import "@/styles/globals.css";
import { Providers } from "@/providers";

export const metadata: Metadata = {
  title: {
    template: "%s | Celk",
    default: "Celk",
  },
  description: "Celk Project Template",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
