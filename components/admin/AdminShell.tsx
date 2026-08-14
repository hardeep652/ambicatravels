"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, LogOut, Package2 } from "lucide-react";
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-white/10 bg-slate-900/95 lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col px-6 py-8">
            <Link href="/admin" className="text-xl font-semibold tracking-tight text-white">
              Ambica Admin
            </Link>
            <p className="mt-2 text-sm text-slate-400">Signed in as {adminName}</p>

            <nav className="mt-10 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                      active
                        ? "bg-sky-500 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="mt-auto flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </aside>

        <main className="bg-slate-50 text-slate-900">{children}</main>
      </div>
    </div>
  );
}
