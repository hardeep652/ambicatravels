import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      fullName,
      mobileNumber,
      email,
      checkInDate,
      checkOutDate,
      destination,
      guests,
      rooms,
      roomType,
      additionalMessage,
    } = await req.json();

    // Basic server-side validation (mirrors required fields on the client)
    if (
      !fullName ||
      !mobileNumber ||
      !checkInDate ||
      !checkOutDate ||
      !destination ||
      !guests ||
      !rooms
    ) {
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
      from: `"Ambica Travels Hotel Booking" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER,
      replyTo: email || undefined,
      subject: `New hotel enquiry: ${fullName}`,
      text: `
Enquiry Type: Hotel Booking / Hotel Enquiry

Name: ${fullName}
Mobile: ${mobileNumber}
Email: ${email || "—"}

Check-in Date: ${checkInDate}
Check-out Date: ${checkOutDate}
Destination: ${destination}
Number of Guests: ${guests}
Number of Rooms: ${rooms}
Room Type: ${roomType || "—"}

Additional Message:
${additionalMessage || "—"}
      `,
      html: `
        <h2>New Hotel Enquiry</h2>
        <p><strong>Enquiry Type:</strong> Hotel Booking / Hotel Enquiry</p>
        <h3>Personal Details</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Mobile:</strong> ${mobileNumber}</p>
        <p><strong>Email:</strong> ${email ? `<a href="mailto:${email}">${email}</a>` : "—"}</p>
        <h3>Stay Details</h3>
        <p><strong>Check-in Date:</strong> ${checkInDate}</p>
        <p><strong>Check-out Date:</strong> ${checkOutDate}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Number of Rooms:</strong> ${rooms}</p>
        <p><strong>Room Type:</strong> ${roomType || "—"}</p>
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
    console.error("Hotel enquiry error:", error);
    return NextResponse.json(
      { message: "Failed to send enquiry" },
      { status: 500 }
    );
  }
}