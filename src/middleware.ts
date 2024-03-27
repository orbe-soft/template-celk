import { env } from "@/libs/env/index.mjs";
import { withAuth } from "next-auth/middleware";

export default withAuth({
  secret: env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
});

export const config = {
  matcher: ["/users/:path*"],
};
