"use client";

import { Button } from "@/components/button";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

export function SignOut() {
  return (
    <Button.Root
      variant="quaternary"
      className="w-fit"
      onClick={() => signOut()}
    >
      <FiLogOut className="text-GLOBAL-PRETO text-[1rem]" />
    </Button.Root>
  );
}
