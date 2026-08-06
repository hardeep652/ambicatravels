"use client";

import { useState } from "react";
import { Phone, CheckCircle, Loader2, Shield } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/data";

export function InstantCallback() {
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile)) {
      setStatus("error");
      setMessage("Please enter a valid 10-digit mobile number");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage("We'll call you within 5 minutes!");
        setMobile("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(16,185,129,0.05)_0%,_transparent_100%)]" />
      
      <div className="container-px relative mx-auto max-w-2xl">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-6">
            <Phone className="h-4 w-4" />
            <span>Instant Callback</span>
          </div>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            Enter your number, we&apos;ll call you in 5 minutes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-600">
            No forms, no waiting. Just drop your mobile number and our travel expert will call you back shortly.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="bg-navy-900 rounded-2xl p-6 md:p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <div className="relative flex-1 max-w-md">
                <label htmlFor="mobile" className="sr-only">
                  Mobile number
                </label>
                <div className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-500">
                  <Phone aria-hidden="true" />
                </div>
                <input
                  id="mobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  disabled={status === "submitting" || status === "success"}
                  className="w-full h-14 pl-12 pr-4 text-base text-navy-900 placeholder:text-navy-400 bg-white border-2 border-navy-100 rounded-full focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all disabled:bg-navy-50 disabled:cursor-not-allowed"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                variant="emerald"
                disabled={status === "submitting" || status === "success"}
                className="w-full sm:w-auto"
              >
                {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "success" ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Request Sent
                  </>
                ) : (
                  "Get Callback"
                )}
              </Button>
            </form>

            {message && (
              <p
                className={`mt-4 text-center text-sm font-medium transition-colors ${
                  status === "success" ? "text-emerald-600" : "text-red-600"
                }`}
                role="alert"
              >
                {message}
              </p>
            )}

            <div className="mt-6 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center">
              <div className="flex items-center gap-2 text-sm text-navy-400">
                <Shield className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                <span>Your number is secure & never shared</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-400">
                <Phone className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                <span>Or call us:{" "}</span>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="font-semibold text-emerald-500 hover:underline">
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}