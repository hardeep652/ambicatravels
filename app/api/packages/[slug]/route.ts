import { NextResponse } from "next/server";
import { getPackageBySlug } from "@/lib/package-service";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);

  if (!pkg) {
    return NextResponse.json({ error: "Package not found." }, { status: 404 });
  }

  return NextResponse.json({ data: pkg });
}
