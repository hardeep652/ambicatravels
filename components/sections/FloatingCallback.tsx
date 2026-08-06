"use client";

import { useState, useEffect } from "react";
import { Phone, X, Loader2, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/data";

export function FloatingCallback() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
          setMessage("");
        }, 3000);
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setStatus("idle");
    setMessage("");
    setMobile("");
  };

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-emerald-500 shadow-xl flex items-center justify-center text-white transition-all duration-300 hover:bg-emerald-600 hover:scale-105 hover:shadow-[0_0_0_4px_rgba(16,185,129,0.3)] focus:outline-none focus:ring-4 focus:ring-emerald-200 active:scale-95"
        aria-label="Request a callback"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <Phone className="h-7 w-7" />
        )}
        <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-[10px] font-bold flex items-center justify-center animate-pulse">
          ?
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm animate-slide-up" role="dialog" aria-label="Instant Callback" aria-modal="true">
          <div className="bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden border border-navy-100">
            <div className="bg-navy-900 px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">Instant Callback</h3>
                  <p className="text-emerald-200 text-xs">We'll call you in 5 minutes</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg text-navy-300 hover:text-white hover:bg-navy-800 transition-colors"
                aria-label="Close callback form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label htmlFor="floating-mobile" className="sr-only">
                  Mobile number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-400" aria-hidden="true" />
                  <input
                    id="floating-mobile"
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    disabled={status === "submitting" || status === "success"}
                    className="w-full h-12 pl-12 pr-4 text-base text-navy-900 placeholder:text-navy-400 bg-navy-50 border-2 border-navy-100 rounded-xl focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all disabled:bg-navy-100 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                variant="emerald"
                disabled={status === "submitting" || status === "success"}
                className="w-full"
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

              {message && (
                <p
                  className={`text-center text-sm font-medium ${
                    status === "success" ? "text-emerald-600" : "text-red-600"
                  }`}
                  role="alert"
                >
                  {message}
                </p>
              )}

              <div className="flex items-center justify-center gap-3 text-xs text-navy-400 pt-2 border-t border-navy-100">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                  <span>Secure</span>
                </div>
                <span>•</span>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="font-medium text-emerald-600 hover:underline"
                >
                  Call: {CONTACT.phone}
                </a>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}