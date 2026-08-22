"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Bus,
  Users,
  Snowflake,
  Check,
  CheckCircle2,
  AlertCircle,
  User,
  Phone,
  Mail,
  MapPin,
  Navigation,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BUSES } from "@/lib/data";

const today = () => new Date().toISOString().split("T")[0];

const enquirySchema = z
  .object({
    fullName: z.string().min(2, "Please enter your full name"),
    mobileNumber: z
      .string()
      .regex(/^[+]?[\d\s-]{10,15}$/, "Enter a valid mobile number"),
    email: z
      .string()
      .email("Enter a valid email address")
      .optional()
      .or(z.literal("")),
    pickupLocation: z.string().min(2, "Pickup location is required"),
    destination: z.string().optional().or(z.literal("")),
    pickupDate: z
      .string()
      .min(1, "Pickup date is required")
      .refine((d) => d >= today(), "Pickup date cannot be in the past"),
    returnDate: z.string().optional().or(z.literal("")),
    selectedBus: z.string().min(1, "Please select a bus"),
    passengers: z
      .string()
      .min(1, "Number of passengers is required")
      .refine((v) => Number(v) >= 1, "Enter a valid number of passengers"),
    acPreference: z.enum(["AC", "Non-AC"], {
      errorMap: () => ({ message: "Please choose AC or Non-AC" }),
    }),
    tripType: z.enum(["One Way", "Round Trip", "Multi Day"], {
      errorMap: () => ({ message: "Please choose a trip type" }),
    }),
    additionalMessage: z.string().optional().or(z.literal("")),
  })
  .refine(
    (data) => !data.returnDate || !data.pickupDate || data.returnDate >= data.pickupDate,
    { message: "Return date cannot be before pickup date", path: ["returnDate"] }
  );

type EnquiryFormData = z.infer<typeof enquirySchema>;

export function BusEnquiry() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      acPreference: undefined as unknown as "AC",
      tripType: undefined as unknown as "One Way",
    },
  });

  const selectedBusId = watch("selectedBus");
  const acPreference = watch("acPreference");
  const tripType = watch("tripType");

  const selectBus = (id: string) => {
    const bus = BUSES.find((b) => b.id === id);
    setValue("selectedBus", id, { shouldValidate: true });
    // Sync AC preference with the selected bus for convenience
    if (bus) {
      setValue("acPreference", bus.ac ? "AC" : "Non-AC", { shouldValidate: true });
    }
  };

  const onSubmit = async (data: EnquiryFormData) => {
    setStatus("submitting");
    setErrorMessage("");
    const bus = BUSES.find((b) => b.id === data.selectedBus);
    try {
      const res = await fetch("/api/bus-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, selectedBus: bus?.name ?? data.selectedBus }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Something went wrong");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const resetForm = () => {
    reset();
    setStatus("idle");
    setErrorMessage("");
  };

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
            <Bus className="h-3.5 w-3.5" strokeWidth={2.5} />
            Bus Rental
          </span>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            Enquire about a bus
          </h1>
          <p className="mt-3 text-navy-500">
            Pick a bus that fits your group, share a few details, and our travel
            desk will get back to you with the best rate.
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
                Thank you!
              </h2>
              <p className="mt-3 text-navy-500">
                Your bus enquiry has been received. Our team will contact you
                shortly.
              </p>
              <Button onClick={resetForm} className="mt-8">
                Submit Another Enquiry
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10"
            >
              {/* ── Left: available buses ────────────────────── */}
              <div>
                <h2 className="mb-5 flex items-center gap-2 font-heading text-lg font-semibold text-navy-900">
                  Available Buses
                  {selectedBusId && (
                    <span className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-600">
                      1 selected
                    </span>
                  )}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {BUSES.map((bus) => {
                    const selected = bus.id === selectedBusId;
                    return (
                      <motion.button
                        type="button"
                        key={bus.id}
                        onClick={() => selectBus(bus.id)}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "group relative flex flex-col overflow-hidden rounded-2xl border bg-white text-left transition-all",
                          selected
                            ? "border-sky-500 shadow-lg shadow-sky-600/10 ring-2 ring-sky-500/30"
                            : "border-navy-100 shadow-sm hover:border-navy-200 hover:shadow-md"
                        )}
                      >
                        {selected && (
                          <span className="absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-white shadow-md">
                            <Check className="h-4 w-4" strokeWidth={3} />
                          </span>
                        )}
                        <div className="relative h-36 w-full overflow-hidden">
                          <Image
                            src={bus.image}
                            alt={bus.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 300px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <span className="absolute left-3 top-3 rounded-full bg-navy-900/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                            {bus.category}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-4">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-heading text-base font-semibold text-navy-900">
                              {bus.name}
                            </h3>
                            {bus.pricePerDay && (
                              <span className="whitespace-nowrap text-right text-sm font-semibold text-sky-600">
                                ₹{bus.pricePerDay.toLocaleString("en-IN")}
                                <span className="block text-[10px] font-normal text-navy-400">
                                  /day
                                </span>
                              </span>
                            )}
                          </div>
                          <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-navy-500">
                            {bus.description}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-navy-500">
                            <span className="flex items-center gap-1">
                              <Users className="h-3.5 w-3.5 text-navy-300" />
                              {bus.seating} seats
                            </span>
                            <span className="flex items-center gap-1">
                              <Snowflake className="h-3.5 w-3.5 text-navy-300" />
                              {bus.ac ? "AC" : "Non-AC"}
                            </span>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* ── Right: enquiry form ──────────────────────── */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="rounded-2xl border border-navy-100 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-8"
                >
                  {/* Personal details */}
                  <FieldGroup title="Personal Details">
                    <Field
                      id="fullName"
                      label="Full name *"
                      icon={User}
                      error={errors.fullName?.message}
                      inputProps={{
                        ...register("fullName"),
                        type: "text",
                        autoComplete: "name",
                        placeholder: "Your name",
                      }}
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        id="mobileNumber"
                        label="Mobile number *"
                        icon={Phone}
                        error={errors.mobileNumber?.message}
                        inputProps={{
                          ...register("mobileNumber"),
                          type: "tel",
                          autoComplete: "tel",
                          placeholder: "+91-98253 15985",
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
                    </div>
                  </FieldGroup>

                  {/* Trip details */}
                  <FieldGroup title="Trip Details">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        id="pickupLocation"
                        label="Pickup location *"
                        icon={MapPin}
                        error={errors.pickupLocation?.message}
                        inputProps={{
                          ...register("pickupLocation"),
                          type: "text",
                          placeholder: "e.g. Ahmedabad Railway Station",
                        }}
                      />
                      <Field
                        id="destination"
                        label="Destination"
                        icon={Navigation}
                        error={errors.destination?.message}
                        inputProps={{
                          ...register("destination"),
                          type: "text",
                          placeholder: "e.g. Statue of Unity",
                        }}
                      />
                      <Field
                        id="pickupDate"
                        label="Pickup date *"
                        icon={Calendar}
                        error={errors.pickupDate?.message}
                        inputProps={{
                          ...register("pickupDate"),
                          type: "date",
                          min: today(),
                        }}
                      />
                      <Field
                        id="returnDate"
                        label="Return date"
                        icon={Calendar}
                        error={errors.returnDate?.message}
                        inputProps={{
                          ...register("returnDate"),
                          type: "date",
                          min: today(),
                        }}
                      />
                    </div>
                  </FieldGroup>

                  {/* Bus requirements */}
                  <FieldGroup title="Bus Requirements">
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-500">
                        Selected bus *
                      </label>
                      <div
                        className={cn(
                          "flex items-center gap-3 rounded-lg border bg-white p-3",
                          errors.selectedBus
                            ? "border-red-400"
                            : "border-navy-200"
                        )}
                      >
                        {selectedBusId ? (
                          <SelectedBusPreview id={selectedBusId} />
                        ) : (
                          <p className="text-sm text-navy-400">
                            Select a bus from the list on the left
                          </p>
                        )}
                      </div>
                      {errors.selectedBus && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.selectedBus.message}
                        </p>
                      )}
                    </div>

                    <Field
                      id="passengers"
                      label="Number of passengers *"
                      icon={Users}
                      error={errors.passengers?.message}
                      inputProps={{
                        ...register("passengers"),
                        type: "number",
                        min: 1,
                        placeholder: "e.g. 25",
                      }}
                    />

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-500">
                        AC / Non-AC *
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {(["AC", "Non-AC"] as const).map((option) => (
                          <button
                            type="button"
                            key={option}
                            onClick={() =>
                              setValue("acPreference", option, {
                                shouldValidate: true,
                              })
                            }
                            className={cn(
                              "rounded-lg border py-2.5 text-sm font-medium transition-all",
                              acPreference === option
                                ? "border-sky-500 bg-sky-50 text-sky-700 ring-1 ring-sky-500/30"
                                : "border-navy-200 text-navy-600 hover:border-navy-300"
                            )}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                      {errors.acPreference && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.acPreference.message}
                        </p>
                      )}
                    </div>

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
                          {...register("additionalMessage")}
                          id="additionalMessage"
                          rows={3}
                          className="block w-full resize-none rounded-lg border border-navy-200 bg-white py-3 pl-10 pr-4 text-navy-900 placeholder-navy-400 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                          placeholder="Onboard meals, extra stops, preferred pickup time…"
                        />
                      </div>
                    </div>
                  </FieldGroup>

                  {status === "error" && (
                    <div className="mb-5 flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-800">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      {errorMessage || "Unable to submit. Please try again later."}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting"
                      ? "Submitting…"
                      : "Submit Enquiry"}
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── Selected bus mini preview ───────────────────────────────── */
function SelectedBusPreview({ id }: { id: string }) {
  const bus = BUSES.find((b) => b.id === id);
  if (!bus) return null;
  return (
    <>
      <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md">
        <Image src={bus.image} alt={bus.name} fill sizes="64px" className="object-cover" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-navy-900">{bus.name}</p>
        <p className="truncate text-xs text-navy-500">
          {bus.category} · {bus.seating} seats · {bus.ac ? "AC" : "Non-AC"}
        </p>
      </div>
    </>
  );
}

/* ── Section wrapper ─────────────────────────────────────────── */
function FieldGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 space-y-4 border-b border-navy-100 pb-6 last:mb-6 last:border-b-0 last:pb-0">
      <p className="font-heading text-sm font-semibold text-navy-900">{title}</p>
      {children}
    </div>
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
