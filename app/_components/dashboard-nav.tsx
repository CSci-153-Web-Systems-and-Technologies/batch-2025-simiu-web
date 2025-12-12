"use client";

import { useRouter, usePathname } from "next/navigation";
import ButtonWithIcon from "@/app/_components/ButtonWithIcon";
import { Clapperboard, ChartSpline } from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const activeClass = "bg-white bg-none text-[#8C45FF] shadow-none";

  return (
    <div className="flex flex-col gap-2 mb-4">
      <ButtonWithIcon
        icon={<Clapperboard className="w-5 h-5" />}
        className={cn(
          "w-full justify-start",
          isActive("/mock-interview") && activeClass
        )}
        onClick={() => router.push("/mock-interview")}
      >
        Mock Interview
      </ButtonWithIcon>
      <ButtonWithIcon
        icon={<ChartSpline className="w-5 h-5" />}
        className={cn(
          "w-full justify-start",
          isActive("/progress") && activeClass
        )}
        onClick={() => router.push("/progress")}
      >
        Progress
      </ButtonWithIcon>
    </div>
  );
}
