"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, LogOut, Package2, Plane } from "lucide-react";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/admin/packages",
    label: "Packages",
    icon: Package2,
  },
];

export function AdminShell({
  children,
  adminName,
}: {
  children: React.ReactNode;
  adminName: string;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#F6F9FD] text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-white/10 bg-[#0B1B3A] text-white lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col px-6 py-7">
            <Link href="/admin" className="flex items-center gap-3 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <Plane className="h-5 w-5 text-sky-400" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200/90">Ambica</p>
                <p className="text-base font-semibold uppercase tracking-[0.14em]">Travels</p>
              </div>
            </Link>

            <nav className="mt-8 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                      active
                        ? "bg-sky-600 text-white shadow-[0_8px_24px_-10px_rgba(37,99,235,0.6)]"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold ring-1 ring-white/15">
                  {adminName?.charAt(0)?.toUpperCase() ?? "A"}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-medium text-white/90 truncate max-w-[140px]">{adminName}</p>
                  <p className="text-[11px] text-white/60">Administrator</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/admin/login" })}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white"
              >
                <LogOut className="h-4 w-4" aria-hidden="true" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        <main className="bg-[#F6F9FD] text-slate-900">{children}</main>
      </div>
    </div>
  );
}