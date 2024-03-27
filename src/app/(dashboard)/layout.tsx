import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <main className="px-32 py-20 bg-[#F0F0F0] min-h-screen">{children}</main>
  );
}
