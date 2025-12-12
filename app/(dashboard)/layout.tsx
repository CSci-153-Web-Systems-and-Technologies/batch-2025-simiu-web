import { redirect } from "next/navigation";
import Image from "next/image";
import { LogoutButton } from "@/app/_components/logout-button";
import { createClient } from "@/lib/supabase/server";

import logo from "@/public/Logo2.png";
import { DashboardNav } from "@/app/_components/dashboard-nav";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    redirect("/auth/login");
  }

  return (
    <div className="max-w-screen h-screen w-full flex">
      <aside className="h-full flex flex-col w-60">
        <div className="border-r border-b flex h-14 items-center justify-start px-6">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="flex flex-1 flex-col justify-between border-r p-4">
          <DashboardNav />
          <LogoutButton />
        </div>
      </aside>
      <div className="w-full">
        <div>{children}</div>
      </div>
    </div>
  );
}
