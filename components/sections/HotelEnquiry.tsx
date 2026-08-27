"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  AlertCircle,
  Calendar,
  Check,
  CheckCircle2,
  Hotel,
  User,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "917203035985";

const today = () => new Date().toISOString().split("T")[0];

export function HotelEnquiry() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const get = (key: string) => (fd.get(key) as string | null)?.trim() || "";

    const fullName = get("fullName");
    const mobile = get("mobileNumber");
    const email = get("email");
    const checkIn = get("checkInDate");
    const checkOut = get("checkOutDate");
    const destination = get("destination");
    const guests = get("guests");
    const rooms = get("rooms");
    const roomType = get("roomType");
    const message = get("additionalMessage");

    const details: string[] = [];
    if (fullName) details.push(`Name: ${fullName}`);
    if (mobile) details.push(`Mobile: ${mobile}`);
    if (email) details.push(`Email: ${email}`);
    if (destination) details.push(`Destination: ${destination}`);
    if (checkIn) details.push(`Check-in: ${checkIn}`);
    if (checkOut) details.push(`Check-out: ${checkOut}`);
    if (guests) details.push(`Guests: ${guests}`);
    if (rooms) details.push(`Rooms: ${rooms}`);
    if (roomType) details.push(`Room Type: ${roomType}`);
    if (message) details.push(`Notes: ${message}`);

    const lines: string[] = [
      "New Hotel Booking Enquiry",
      "-------------------------------",
      ...details,
    ];

    if (lines.length <= 2) {
      setStatus("error");
      return;
    }

    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
    setStatus("success");
  }

  return (
    <section className="section-py relative overflow-hidden bg-gradient-to-b from-white to-navy-50">
      <div className="pointer-events-none absolute -top-24 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="container-px relative mx-auto max-w-7xl">
        {/* Back to services */}
        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-navy-500 transition-colors hover:text-sky-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-sky-600">
            <Hotel className="h-3.5 w-3.5" strokeWidth={2.5} />
            Hotel Booking
          </span>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Enquire about a hotel stay
          </h1>
          <p className="mt-3 text-navy-500">
            Fill in as much or as little as you like — we&apos;ll handle the rest over WhatsApp.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mx-auto max-w-xl rounded-2xl border border-navy-100 bg-white p-10 text-center shadow-xl shadow-navy-900/5"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
              >
                <CheckCircle2 className="h-9 w-9" />
              </motion.span>
              <h2 className="mt-6 font-heading text-2xl font-semibold text-navy-900">
                Redirecting to WhatsApp!
              </h2>
              <p className="mt-3 text-navy-500">
                Your enquiry message is ready. Complete it on WhatsApp and our team will respond shortly.
              </p>
              <Button onClick={() => setStatus("idle")} className="mt-8">
                Submit Another Enquiry
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-auto max-w-2xl"
            >
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-8"
              >
                {/* Personal details */}
                <FieldGroup title="Personal Details">
                  <Field id="fullName" name="fullName" label="Full name" icon={User}
                    inputProps={{ type: "text", autoComplete: "name", placeholder: "Your name" }}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="mobileNumber" name="mobileNumber" label="Mobile number" icon={Phone}
                      inputProps={{ type: "tel", autoComplete: "tel", placeholder: "+91-7203035985" }}
                    />
                    <Field id="email" name="email" label="Email" icon={Mail}
                      inputProps={{ type: "email", autoComplete: "email", placeholder: "you@example.com" }}
                    />
                  </div>
                </FieldGroup>

                {/* Stay details */}
                <FieldGroup title="Stay Details">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="checkInDate" name="checkInDate" label="Check-in date" icon={Calendar}
                      inputProps={{ type: "date", min: today() }}
                    />
                    <Field id="checkOutDate" name="checkOutDate" label="Check-out date" icon={Calendar}
                      inputProps={{ type: "date", min: today() }}
                    />
                  </div>
                  <Field id="destination" name="destination" label="Destination city" icon={MapPin}
                    inputProps={{ type: "text", placeholder: "e.g. Jaipur, Udaipur, Goa" }}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="guests" name="guests" label="Number of guests" icon={User}
                      inputProps={{ type: "number", min: 1, placeholder: "e.g. 2" }}
                    />
                    <Field id="rooms" name="rooms" label="Number of rooms" icon={User}
                      inputProps={{ type: "number", min: 1, placeholder: "e.g. 1" }}
                    />
                  </div>
                  <SelectField id="roomType" name="roomType" label="Room type" icon={Check}>
                    <option value="">Select room type</option>
                    <option value="Standard">Standard</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Suite">Suite</option>
                    <option value="Premium">Premium</option>
                  </SelectField>
                </FieldGroup>

                {/* Additional requirements */}
                <FieldGroup title="Additional Requirements">
                  <div>
                    <label
                      htmlFor="additionalMessage"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-500"
                    >
                      Additional requirements / message
                    </label>
                    <div className="relative">
                      <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-navy-300" />
                      <textarea
                        id="additionalMessage"
                        name="additionalMessage"
                        rows={3}
                        className="block w-full resize-none rounded-lg border border-navy-200 bg-white py-3 pl-10 pr-4 text-navy-900 placeholder-navy-400 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                        placeholder="Onboard meals, preferred floor, accessibility needs…"
                      />
                    </div>
                  </div>
                </FieldGroup>

                {status === "error" && (
                  <div className="mb-5 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-800">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    Please fill in at least one field before submitting.
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full gap-2">
                  Send Enquiry on WhatsApp
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── Section wrapper ─────────────────────────────────────────── */
function FieldGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 space-y-4 border-b border-navy-100 pb-6 last:mb-6 last:border-b-0 last:pb-0">
      <p className="font-heading text-sm font-semibold text-navy-900">{title}</p>
      {children}
    </div>
  );
}

/* ── Text / number / date input ──────────────────────────────── */
function Field({
  id,
  name,
  label,
  icon: Icon,
  inputProps,
}: {
  id: string;
  name: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-500"
      >
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
        <input
          id={id}
          name={name}
          {...inputProps}
          className={cn(
            "block w-full rounded-lg border border-navy-200 bg-white py-3 pl-10 pr-4 text-navy-900 placeholder-navy-400 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
          )}
        />
      </div>
    </div>
  );
}

/* ── Select dropdown ─────────────────────────────────────────── */
function SelectField({
  id,
  name,
  label,
  icon: Icon,
  children,
}: {
  id: string;
  name: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-500"
      >
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300" />
        <select
          id={id}
          name={name}
          defaultValue=""
          className="block w-full appearance-none rounded-lg border border-navy-200 bg-white py-3 pl-10 pr-4 text-navy-900 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
        >
          {children}
        </select>
      </div>
    </div>
  );
}