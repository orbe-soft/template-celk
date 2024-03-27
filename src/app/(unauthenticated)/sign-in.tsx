"use client";

import { Button } from "@/components/button";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export function SignIn() {
  return (
    <Button.Root onClick={() => signIn("github")}>
      <FaGithub className="text-[1.5rem] text-[#242424]" />
      Continue with Github
    </Button.Root>
  );
}
