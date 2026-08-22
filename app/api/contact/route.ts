import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(text: string) {
  return String(text)
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, "\u0022")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Basic server‑side validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Configure transporter from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const submissionDate = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const submissionTime = new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const mailOptions = {
      from: `"Ambica Travels Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Travel Enquiry - ${escapeHtml(subject)}`,
      text: `New Travel Enquiry\n\nName: ${escapeHtml(name)}\nEmail: ${escapeHtml(email)}\nPhone: ${escapeHtml(phone)}\nSubject: ${escapeHtml(subject)}\n\nMessage:\n${escapeHtml(message)}`,
      html: `
    <!--[if mso]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr><td width="600" style="font-family: Arial, sans-serif;">
    <![endif]-->
    <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #172033; max-width: 600px; margin: 0 auto; background: #f7f9fc; padding: 20px;">
      
      <!-- HEADER -->
      <div style="background: linear-gradient(135deg, #0a2342 0%, #061a33 100%); padding: 40px 20px; text-align: center; margin-bottom: 30px;">
        <a href="https://ambicatravels.com" style="text-decoration: none; display: block;">
          <img src="https://ambicatravels.com/AT.png" alt="Ambica Travels Logo" style="max-width: 180px; margin: 0 auto; height: auto;">
        </a>
        <p style="margin: 10px 0 0; color: #e8c16a; font-size: 16px; font-weight: 400;">New Travel Enquiry</p>
      </div>
      
      <!-- CUSTOMER DETAILS -->
      <div style="background: #ffffff; border: 1px solid #e5e7eb; margin-bottom: 30px; padding: 25px; border-radius: 8px;">
        <h2 style="color: #0a2342; font-size: 20px; font-weight: 600; margin-top: 0; margin-bottom: 20px;">CUSTOMER DETAILS</h2>
        <p style="margin: 8px 0; color: #475569; font-size: 15px;">
          <strong style="color: #172033;">Full Name</strong><br>
          <span style="color: #64748B;">${escapeHtml(name)}</span>
        </p>
        <p style="margin: 8px 0; color: #475569; font-size: 15px;">
          <strong style="color: #172033;">Email Address</strong><br>
          <a href="mailto:${escapeHtml(email)}" style="color: #0891b2; text-decoration: none;">
            ${escapeHtml(email)}
          </a>
        </p>
        <p style="margin: 8px 0; color: #475569; font-size: 15px;">
          <strong style="color: #172033;">Phone Number</strong><br>
          ${escapeHtml(phone)}
        </p>
        <p style="margin: 8px 0; color: #475569; font-size: 15px;">
          <strong style="color: #172033;">Enquiry Received On</strong><br>
          ${submissionDate} ${submissionTime}
        </p>
      </div>
      
      <!-- ENQUIRY DETAILS -->
      <div style="background: #ffffff; border: 1px solid #e5e7eb; margin-bottom: 30px; padding: 25px; border-radius: 8px;">
        <h2 style="color: #0a2342; font-size: 20px; font-weight: 600; margin-top: 0; margin-bottom: 20px;">ENQUIRY DETAILS</h2>
        <p style="margin: 8px 0; color: #475569; font-size: 15px;">
          <strong style="color: #172033;">Subject</strong><br>
          ${escapeHtml(subject)}
        </p>
        <div style="background: #f8fafc; border-left: 4px solid #f2b632; padding: 20px; margin: 20px 0; border-radius: 4px;">
          <p style="margin: 0 0 12px 0; color: #64748B; font-size: 14px;">Message:</p>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 15px; border-radius: 4%; color: #172033; line-height: 1.6; min-height: 80px;">
            ${escapeHtml(message).replace(/\n/g, "<br>")}
          </div>
        </div>
      </div>
      
      <!-- REPLY CTA -->
      <div style="background: #0a2342; padding: 30px 20px; text-align: center; margin-bottom: 30px;">
        <h2 style="margin: 0; color: #f2b632; font-size: 20px; font-weight: 600;">Reply to this Enquiry</h2>
        <p style="margin: 10px 0 0; color: #64748B; font-size: 15px;">
          You can reply directly to this email. Your response will go to the customer.
        </p>
        <a href="mailto:${escapeHtml(email)}" style="display: inline-block; background: #f2b632; color: #0a2342; text-decoration: none; padding: 12px 28px; border-radius: 4px; font-weight: 600; margin-top: 15px; font-size: 15px;">REPLY NOW</a>
      </div>
      
      <!-- AUTOMATED NOTICE -->
      <div style="background: #f1f5f9; border: 1px solid #cbd5e1; padding: 20px; margin-bottom: 20px; border-radius: 4%; font-size: 13px; color: #64748B; line-height: 1.5;">
        <p style="margin: 0;">This is an automated email from Ambica Travels website.</p>
      </div>
      
      <!-- FOOTER -->
      <div style="background: #0a2342; color: #e2e8f0; padding: 30px 20px; text-align: center; border-radius: 8px; margin-top: 40px;">
        <p style="margin: 0 0 10px 0; font-size: 12px; color: #64748B; text-transform: uppercase; letter-spacing: 1px;">Ambica Travels</p>
        <p style="margin: 5px 0 0 0; font-size: 14px; color: #cbd5e1;">
          Website: ambicatravels.com<br>
          Email: info@ambikatravels.com<br>
          Phone: +91-98253 15985
        </p>
        <p style="margin: 15px 0 0 0; font-size: 12px; color: #64748B;">
          © 2026 Ambica Travels. All rights reserved.
        </p>
      </div>
      
    </div>
    <!--[if mso]>
      </td></tr></table>
    <![endif]-->
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}