import type { Metadata } from "next";
import Image from "next/image";
import { Plane, ShieldCheck } from "lucide-react";
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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F5F8FC] px-4 py-8 sm:px-6 sm:py-12">
      {/* Subtle travel-inspired page background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(79,70,229,0.12),_transparent_45%),linear-gradient(180deg,_#F5F8FC_0%,_#EAF1FA_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-600/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="animate-login-fade-up relative w-full max-w-[1150px] overflow-hidden rounded-[28px] bg-white shadow-[0_35px_90px_-30px_rgba(7,26,61,0.35)] ring-1 ring-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr]">
          {/* LEFT — Travel experience panel */}
          <section className="relative hidden min-h-[640px] flex-col justify-between overflow-hidden p-10 text-white lg:flex xl:p-12">
            <Image
              src="/login-travel.jpg"
              alt="Airplane wing above the clouds at sunrise"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 0px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(3,24,63,0.85)_0%,_rgba(5,45,105,0.55)_50%,_rgba(2,18,45,0.9)_100%)]"
            />

            {/* Branding */}
            <div className="animate-login-fade-up login-delay-1 relative flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/25 backdrop-blur-sm">
                <Plane className="h-5 w-5 text-sky-400" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold uppercase tracking-[0.22em]">
                  Ambica Travels
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-200/80">
                  Admin Panel
                </p>
              </div>
            </div>

            {/* Welcome */}
            <div className="animate-login-fade-up login-delay-2 relative max-w-md">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100 ring-1 ring-white/20 backdrop-blur-sm">
                Admin Panel
              </span>
              <h2 className="mt-5 font-heading text-4xl font-bold leading-tight">
                Welcome Back,
                <br />
                <span className="text-sky-400">Admin</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Sign in to access the admin dashboard and manage your travel
                packages, bookings and customers.
              </p>
            </div>

            {/* Secure access card */}
            <div className="animate-login-fade-up login-delay-3 relative w-full max-w-sm rounded-2xl border border-white/20 bg-white/10 p-5 shadow-[0_20px_40px_-20px_rgba(2,18,45,0.8)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/25 ring-1 ring-white/25">
                  <ShieldCheck className="h-5 w-5 text-sky-200" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold">Secure &amp; Trusted</p>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/70">
                Your data is protected with enterprise-grade security.
              </p>
            </div>
          </section>

          {/* RIGHT — Login panel */}
          <section className="relative flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
            <LoginForm />
          </section>
        </div>
      </div>
    </main>
  );
}
