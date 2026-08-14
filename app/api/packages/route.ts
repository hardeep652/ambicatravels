import { NextResponse } from "next/server";
import { listPackages } from "@/lib/package-service";

export async function GET() {
  const packages = await listPackages();
  return NextResponse.json({ data: packages });
}
