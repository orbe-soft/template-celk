import { type NextAuthOptions } from "next-auth";
import { env } from "../env/index.mjs";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  debug: env.NODE_ENV === "development",
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
};
