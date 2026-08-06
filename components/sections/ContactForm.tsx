"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
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
    <section id="contact-form" className="section-py bg-white">
      <div className="container-px mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-navy-900">
            Send us a message
          </h2>
          <p className="mt-3 text-navy-500">
            We'd love to hear from you. Fill out the form and we'll get back within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy-900">
                Full Name *
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                autoComplete="name"
                className={cn(
                  "mt-1 block w-full rounded-lg border px-4 py-3 text-navy-900 placeholder-navy-400 transition",
                  errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-navy-200 focus:border-sky-500 focus:ring-sky-500"
                )}
                placeholder="Your name"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-900">
                Email *
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                autoComplete="email"
                className={cn(
                  "mt-1 block w-full rounded-lg border px-4 py-3 text-navy-900 placeholder-navy-400 transition",
                  errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-navy-200 focus:border-sky-500 focus:ring-sky-500"
                )}
                placeholder="you@example.com"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-navy-900">
                Phone *
              </label>
              <input
                {...register("phone")}
                id="phone"
                type="tel"
                autoComplete="tel"
                className={cn(
                  "mt-1 block w-full rounded-lg border px-4 py-3 text-navy-900 placeholder-navy-400 transition",
                  errors.phone ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-navy-200 focus:border-sky-500 focus:ring-sky-500"
                )}
                placeholder="+91 98765 43210"
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-navy-900">
                Subject *
              </label>
              <input
                {...register("subject")}
                id="subject"
                type="text"
                className={cn(
                  "mt-1 block w-full rounded-lg border px-4 py-3 text-navy-900 placeholder-navy-400 transition",
                  errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-navy-200 focus:border-sky-500 focus:ring-sky-500"
                )}
                placeholder="e.g. Holiday package enquiry"
                aria-invalid={errors.subject ? "true" : "false"}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-navy-900">
              Message *
            </label>
            <textarea
              {...register("message")}
              id="message"
              rows={5}
              className={cn(
                "mt-1 block w-full rounded-lg border px-4 py-3 text-navy-900 placeholder-navy-400 transition resize-none",
                errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-navy-200 focus:border-sky-500 focus:ring-sky-500"
              )}
              placeholder="Tell us about your travel plans, dates, group size, special requests…"
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          {status === "success" && (
            <div className="rounded-lg bg-emerald-50 p-4 text-center text-emerald-800">
              Thanks! Your message has been sent. We'll get back to you shortly.
            </div>
          )}
          {status === "error" && (
            <div className="rounded-lg bg-red-50 p-4 text-center text-red-800">
              {errorMessage || "Unable to submit. Please try again later."}
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}