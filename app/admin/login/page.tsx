import type { Metadata } from "next";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_40%),linear-gradient(180deg,_#f8fafc_0%,_#e2e8f0_100%)] px-5 py-16">
      <div className="w-full max-w-md rounded-[2rem] border border-white/70 bg-white/95 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Ambica Travels
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          Admin login
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Sign in with an admin account to manage packages.
        </p>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
