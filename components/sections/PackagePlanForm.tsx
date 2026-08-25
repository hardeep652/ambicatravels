"use client";

import type { FormEvent } from "react";

type PackagePlanFormProps = {
  packageInfo: {
    location: string;
    duration: string;
    price: string;
  };
};

export function PackagePlanForm({ packageInfo }: PackagePlanFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = formData.get("fullName") || "";
    const mobileNumber = formData.get("mobileNumber") || "";
    const travelDate = formData.get("travelDate") || "";
    const travelers = formData.get("travelers") || "1";
    const message = `*New Package Enquiry Received*

*Full Name*: ${fullName}
*Mobile Number*: ${mobileNumber}
*Expected Travel Date*: ${travelDate}
*Number of Travelers*: ${travelers}
*Location*: ${packageInfo.location}
*Duration*: ${packageInfo.duration}
*Price*: ${packageInfo.price}`;

    const whatsappUrl = `https://wa.me/917203035985?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="mt-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-[0_2px_10px_rgba(15,23,42,0.05)]"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-navy-600">
            Full Name
            <span className="text-red-500 required">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            defaultValue=""
            required
            className="w-full rounded-xl border border-navy-200 px-4 py-3 transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-navy-600">
            Mobile Number
            <span className="text-red-500 required">*</span>
          </label>
          <input
            type="tel"
            name="mobileNumber"
            defaultValue=""
            required
            pattern="[0-9]{10,15}"
            placeholder="+91 XXXXXXXXXX"
            className="w-full rounded-xl border border-navy-200 px-4 py-3 transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-navy-600">
            Expected Travel Date
            <span className="text-red-500 required">*</span>
          </label>
          <input
            type="date"
            name="travelDate"
            defaultValue=""
            required
            className="w-full rounded-xl border border-navy-200 px-4 py-3 transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-navy-600">
            Number of Travelers
            <span className="text-red-500 required">*</span>
          </label>
          <input
            type="number"
            name="travelers"
            defaultValue="1"
            min="1"
            required
            className="w-full rounded-xl border border-navy-200 px-4 py-3 transition-colors focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      <div className="mt-6 border-t border-navy-100 pt-6">
        <button
          type="submit"
          className="w-full rounded-xl bg-navy-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-navy-500"
        >
          Plan this trip
        </button>
      </div>
    </form>
  );
}
