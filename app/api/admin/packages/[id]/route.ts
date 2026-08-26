import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { deletePackage, getAdminPackageById, updatePackage } from "@/lib/package-service";
import { packageSchema } from "@/schemas/package.schema";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session) {
    return unauthorized();
  }

  const { id } = await params;
  const pkg = await getAdminPackageById(id);

  if (!pkg) {
    return NextResponse.json({ error: "Package not found." }, { status: 404 });
  }

  return NextResponse.json({ data: pkg });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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

  const { id } = await params;

  try {
    const pkg = await updatePackage(id, parsed.data);

    revalidatePath("/");
    revalidatePath("/packages");
    revalidatePath(`/packages/${pkg.slug}`);

    return NextResponse.json({ data: pkg });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json({ error: "Slug already exists." }, { status: 409 });
    }

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Package not found." }, { status: 404 });
    }

    console.error(error);
    return NextResponse.json({ error: "Failed to update package." }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session) {
    return unauthorized();
  }

  const { id } = await params;

  try {
    await deletePackage(id);

    revalidatePath("/");
    revalidatePath("/packages");

    return NextResponse.json({ success: true });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Package not found." }, { status: 404 });
    }

    console.error(error);
    return NextResponse.json({ error: "Failed to delete package." }, { status: 500 });
  }
}
