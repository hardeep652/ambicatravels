"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import {
  ArrowRight,
  ChevronDown,
  Eye,
  EyeOff,
  Globe,
  Lock,
  Mail,
  Plane,
  ShieldCheck,
} from "lucide-react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showForgotHint, setShowForgotHint] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/admin",
    });

    setIsSubmitting(false);

    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <div className="mx-auto w-full max-w-md">
      {/* Language selector */}
      <div className="animate-login-fade-up login-delay-1 flex justify-end">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
          aria-label="Change language, currently English"
        >
          <Globe className="h-3.5 w-3.5" aria-hidden="true" />
          English
          <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile branding (left panel is hidden on small screens) */}
      <div className="animate-login-fade-up login-delay-1 mt-6 flex items-center justify-center gap-2 lg:hidden">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-600/10">
          <Plane className="h-4 w-4 text-sky-600" aria-hidden="true" />
        </span>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#071A3D]">
          Ambica Travels
        </span>
      </div>

      {/* Header */}
      <div className="animate-login-fade-up login-delay-2 mt-6 flex flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-600 text-white shadow-[0_12px_30px_-8px_rgba(37,99,235,0.6)]">
          <Lock className="h-6 w-6" aria-hidden="true" />
        </span>
        <h1 className="mt-5 font-heading text-2xl font-bold tracking-tight text-[#071A3D] sm:text-3xl">
          Admin Login
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Please sign in to continue
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="animate-login-fade-up login-delay-3 mt-8 space-y-5"
      >
        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-[#172033]"
          >
            Email Address
          </label>
          <div className="relative">
            <Mail
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="admin@ambicatravels.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-[54px] w-full rounded-[14px] border border-slate-200 bg-white pl-12 pr-4 text-sm text-[#172033] outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-600/10"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-[#172033]"
          >
            Password
          </label>
          <div className="relative">
            <Lock
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-[54px] w-full rounded-[14px] border border-slate-200 bg-white pl-12 pr-12 text-sm text-[#172033] outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-600 focus:ring-4 focus:ring-sky-600/10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:text-slate-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Eye className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Remember me / Forgot password */}
        <div className="flex items-center justify-between gap-3">
          <label
            htmlFor="remember-me"
            className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"
          >
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-sky-600 accent-sky-600 focus:ring-2 focus:ring-sky-600/30"
            />
            Remember me
          </label>
          <button
            type="button"
            onClick={() => setShowForgotHint((value) => !value)}
            className="text-sm font-medium text-sky-600 transition hover:text-indigo-600"
            aria-expanded={showForgotHint}
          >
            Forgot Password?
          </button>
        </div>

        {showForgotHint ? (
          <p
            role="status"
            className="rounded-xl border border-sky-100 bg-sky-50 px-4 py-3 text-xs text-sky-700"
          >
            Please contact your system administrator to reset your password.
          </p>
        ) : null}

        {error ? (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        ) : null}

        {/* Sign In */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex h-[54px] w-full items-center justify-center gap-2 rounded-[14px] bg-gradient-to-br from-sky-600 to-indigo-600 text-sm font-semibold text-white shadow-[0_14px_30px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-10px_rgba(37,99,235,0.7)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-600/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <>
              <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                aria-hidden="true"
              />
              Signing in...
            </>
          ) : (
            <>
              Sign In
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="animate-login-fade-up login-delay-4 mt-10 flex flex-col items-center gap-1 text-center">
        <p className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
          Protected Admin Area
        </p>
        <p className="text-xs text-slate-400">
          © 2026 Ambica Travels. All rights reserved.
        </p>
      </div>
    </div>
  );
}
