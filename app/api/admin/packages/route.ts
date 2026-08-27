import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { createPackage, listAdminPackages } from "@/lib/package-service";
import { packageSchema } from "@/schemas/package.schema";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(request: Request) {
  const session = await auth();

  if (!session) {
    return unauthorized();
  }

  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") ?? "";
  const packages = await listAdminPackages(search);

  return NextResponse.json({ data: packages });
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return unauthorized();
  }

  const json = await request.json();
  const parsed = packageSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const pkg = await createPackage(parsed.data);

    revalidatePath("/");
    revalidatePath("/packages");
    revalidatePath(`/packages/${pkg.slug}`);

    return NextResponse.json({ data: pkg }, { status: 201 });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json({ error: "Slug already exists." }, { status: 409 });
    }

    console.error(error);
    return NextResponse.json({ error: "Failed to create package." }, { status: 500 });
  }
}
