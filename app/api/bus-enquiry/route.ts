import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      fullName,
      mobileNumber,
      email,
      pickupLocation,
      destination,
      pickupDate,
      returnDate,
      selectedBus,
      passengers,
      acPreference,
      tripType,
      additionalMessage,
    } = await req.json();

    // Basic server-side validation (mirrors required fields on the client)
    if (!fullName || !mobileNumber || !pickupLocation || !pickupDate || !passengers) {
      return NextResponse.json(
        { message: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    // Configure transporter from environment variables (same setup as /api/contact)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Ambica Travels Bus Rental" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER,
      replyTo: email || undefined,
      subject: `New bus enquiry: ${fullName}`,
      text: `
Enquiry Type: Bus Rental / Bus Enquiry

Name: ${fullName}
Mobile: ${mobileNumber}
Email: ${email || "—"}

Selected Bus: ${selectedBus || "—"}
Passengers: ${passengers || "—"}
AC Preference: ${acPreference || "—"}
Trip Type: ${tripType || "—"}

Pickup Location: ${pickupLocation}
Destination: ${destination || "—"}
Pickup Date: ${pickupDate}
Return Date: ${returnDate || "—"}

Additional Message:
${additionalMessage || "—"}
      `,
      html: `
        <h2>New Bus Enquiry</h2>
        <p><strong>Enquiry Type:</strong> Bus Rental / Bus Enquiry</p>
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Mobile:</strong> ${mobileNumber}</p>
        <p><strong>Email:</strong> ${email ? `<a href="mailto:${email}">${email}</a>` : "—"}</p>
        <h3>Trip Details</h3>
        <p><strong>Pickup Location:</strong> ${pickupLocation}</p>
        <p><strong>Destination:</strong> ${destination || "—"}</p>
        <p><strong>Pickup Date:</strong> ${pickupDate}</p>
        <p><strong>Return Date:</strong> ${returnDate || "—"}</p>
        <h3>Bus Requirements</h3>
        <p><strong>Selected Bus:</strong> ${selectedBus || "—"}</p>
        <p><strong>Passengers:</strong> ${passengers || "—"}</p>
        <p><strong>AC Preference:</strong> ${acPreference || "—"}</p>
        <p><strong>Trip Type:</strong> ${tripType || "—"}</p>
        <h3>Additional Message</h3>
        <p>${(additionalMessage || "—").replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Enquiry sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Bus enquiry error:", error);
    return NextResponse.json(
      { message: "Failed to send enquiry" },
      { status: 500 }
    );
  }
}
