"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Plane,
  User,
  Mail,
  Phone,
  Tag,
  MessageSquare,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10),
  subject: z.string(),
  message: z.string(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Something went wrong");
      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <section id="contact-form" className="section-py relative overflow-hidden bg-gradient-to-b from-white to-navy-50">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-24 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="container-px relative mx-auto max-w-5xl">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-sky-600">
            <Plane className="h-3.5 w-3.5" strokeWidth={2.5} />
            Get in touch
          </span>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-navy-900 sm:text-4xl">
            Let's plan your next trip
          </h2>
          <p className="mt-3 text-navy-500">
            Tell us where you'd like to go. A real person on our team replies within 24 hours.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-xl shadow-navy-900/5 lg:grid lg:grid-cols-[300px_1fr]">
          {/* ── Boarding-pass stub ───────────────────────────── */}
          <div className="relative flex flex-col justify-between bg-navy-900 p-8 text-white">
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">
                <span>Enquiry</span>
                <span>Boarding</span>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">From</p>
                  <p className="font-heading text-2xl font-semibold">You</p>
                </div>
                <div className="flex flex-1 items-center px-3">
                  <span className="h-px w-full border-t border-dashed border-navy-500" />
                  <Plane className="mx-1 h-4 w-4 shrink-0 -rotate-0 text-sky-400" />
                  <span className="h-px w-full border-t border-dashed border-navy-500" />
                </div>
                <div className="text-right">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">To</p>
                  <p className="font-heading text-2xl font-semibold">Us</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-y-5 border-t border-navy-700 pt-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-navy-400">Response time</p>
                  <p className="mt-1 flex items-center gap-1.5 font-heading text-xl font-semibold text-white">
                    <Clock3 className="h-4 w-4 text-sky-400" />
                    24h
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-navy-400">Status</p>
                  <p className="mt-1 font-heading text-xl font-semibold text-emerald-400">Open</p>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-navy-400">Direct</p>
                  <a href="mailto:hello@example.com" className="mt-1 flex items-center gap-1.5 text-sm text-navy-100 transition hover:text-sky-400">
                    <Mail className="h-3.5 w-3.5" /> hello@example.com
                  </a>
                  <a href="tel:+91-9825315985" className="mt-1.5 flex items-center gap-1.5 text-sm text-navy-100 transition hover:text-sky-400">
                    <Phone className="h-3.5 w-3.5" /> +91-98253 15985
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-8 border-t border-dashed border-navy-700 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-navy-400">
              No booking is confirmed until you hear back from us
            </p>

            {/* perforation notches, desktop only */}
            <span className="pointer-events-none absolute -right-3 -top-3 hidden h-6 w-6 rounded-full bg-navy-50 lg:block" />
            <span className="pointer-events-none absolute -bottom-3 -right-3 hidden h-6 w-6 rounded-full bg-navy-50 lg:block" />
          </div>

          {/* ── Form panel ───────────────────────────────────── */}
          <div className="border-t border-dashed border-navy-200 p-8 lg:border-l lg:border-t-0 sm:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Full name"
                  icon={User}
                  error={errors.name?.message}
                  inputProps={{
                    ...register("name"),
                    type: "text",
                    autoComplete: "name",
                    placeholder: "Your name",
                  }}
                />
                <Field
                  id="email"
                  label="Email"
                  icon={Mail}
                  error={errors.email?.message}
                  inputProps={{
                    ...register("email"),
                    type: "email",
                    autoComplete: "email",
                    placeholder: "you@example.com",
                  }}
                />
                <Field
                  id="phone"
                  label="Phone"
                  icon={Phone}
                  error={errors.phone?.message}
                  inputProps={{
                    ...register("phone"),
                    type: "tel",
                    autoComplete: "tel",
                    placeholder: "+91-98253 15985",
                  }}
                />
                <Field
                  id="subject"
                  label="Subject"
                  icon={Tag}
                  error={errors.subject?.message}
                  inputProps={{
                    ...register("subject"),
                    type: "text",
                    placeholder: "e.g. Holiday package enquiry",
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-500">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-navy-300" />
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    className={cn(
                      "block w-full resize-none rounded-lg border bg-white py-3 pl-10 pr-4 text-navy-900 placeholder-navy-400 transition focus:outline-none focus:ring-2",
                      errors.message
                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/30"
                        : "border-navy-200 focus:border-sky-500 focus:ring-sky-500/30"
                    )}
                    placeholder="Tell us about your travel plans, dates, group size, special requests…"
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <div aria-live="polite">
                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-800">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    Thanks! Your message has been sent — we'll get back to you shortly.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-800">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    {errorMessage || "Unable to submit. Please try again later."}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-sky-600 text-white transition hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/20 sm:w-auto"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Reusable input field with left icon ─────────────────────── */
function Field({
  id,
  label,
  icon: Icon,
  error,
  inputProps,
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  error?: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-500">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
        <input
          id={id}
          {...inputProps}
          className={cn(
            "block w-full rounded-lg border bg-white py-3 pl-10 pr-4 text-navy-900 placeholder-navy-400 transition focus:outline-none focus:ring-2",
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/30"
              : "border-navy-200 focus:border-sky-500 focus:ring-sky-500/30"
          )}
          aria-invalid={error ? "true" : "false"}
        />
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}