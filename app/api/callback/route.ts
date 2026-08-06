import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { mobile } = await request.json();

    if (!mobile || !/^\d{10}$/.test(mobile)) {
      return NextResponse.json({ error: "Invalid mobile number" }, { status: 400 });
    }

    // TODO: Integrate with your SMS/CRM/notification service here
    // Example: send to WhatsApp Business API, email notification, CRM webhook, etc.
    console.log(`[Callback Request] Mobile: ${mobile}, Time: ${new Date().toISOString()}`);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ success: true, message: "Callback requested successfully" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}