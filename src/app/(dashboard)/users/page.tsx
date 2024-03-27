import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Content } from "./content";
import Link from "next/link";
import { SignOut } from "./sign-out";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/nextauth";
import Image from "next/image";
import { FiUser } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Users",
  description: "Celk Users Project Template",
};

export default async function Users() {
  const session = await getServerSession(authOptions);

  return (
    <section className="flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <div className="flex gap-[1.62rem]">
          <h2 className="text-[#242424] text-4xl font-semibold leading-normal">
            Users
          </h2>

          <div className="bg-[#E6E6E6] rounded-[32px] gap-[0.5rem] flex p-[0.5rem]">
            <div className="relative w-[2.875rem] bg-[#DCDBDB] h-[2.875rem] overflow-hidden rounded-full flex items-center justify-center">
              {session?.user?.image && (
                <Image
                  src={session?.user?.image}
                  alt="User avatar preview"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              {!session?.user?.image && (
                <FiUser className="text-[1.5rem] text-GLOBAL-PRETO" />
              )}
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <strong className="text-[#242424] text-[0.875rem] font-semibold">
                {session?.user?.name}
              </strong>
              <span className="text-[#686565] text-[0.75rem]">
                {session?.user?.email}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[1rem]">
          <Button.Root asChild variant="secondary" className="w-52">
            <Link href="/users/new">New user</Link>
          </Button.Root>

          <SignOut />
        </div>
      </header>

      <Content />
    </section>
  );
}
