import { NextResponse } from "next/server";
import { getFeaturedPackages } from "@/lib/package-service";

export async function GET() {
  const packages = await getFeaturedPackages();
  return NextResponse.json({ data: packages });
}
