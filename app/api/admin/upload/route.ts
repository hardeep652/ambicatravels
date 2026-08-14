import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { uploadPackageThumbnail } from "@/lib/cloudinary";

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Image file is required." }, { status: 400 });
  }

  try {
    const result = await uploadPackageThumbnail(file);

    return NextResponse.json({
      data: {
        url: result.secureUrl,
        publicId: result.publicId,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to upload image." }, { status: 500 });
  }
}
