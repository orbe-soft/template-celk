import type { Metadata } from "next";
import { SignIn } from "./sign-in";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/nextauth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
};

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/users");
  }

  return (
    <main className="bg-[#161616] flex items-center justify-center min-h-screen">
      <section className="w-[44.375rem] p-[6rem] h-[27.6875rem] rounded-[16px] bg-[#FFF] shadow-[0px_2px_5.8px_0px_rgba(30,_63,_81,_0.12);]">
        <h1 className="text-[#242424] text-[2.5rem] font-semibold">Login</h1>

        <p className="text-[#585858] text-[1.25rem] font-medium my-[1.81rem] mb-[3.62rem]">
          Login with github to enter the application
        </p>

        <SignIn />
      </section>
    </main>
  );
}
