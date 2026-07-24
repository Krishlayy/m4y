"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "./auth";
import { UTApi } from "uploadthing/server";
import { revalidatePath } from "next/cache";

const utapi = new UTApi();

export async function saveMediaRecord(data: {
  name: string;
  url: string;
  type: string;
  size: number;
  storageKey: string;
}) {
  const admin = await requireAdmin();

  const media = await prisma.media.create({
    data: {
      name: data.name,
      url: data.url,
      type: data.type,
      size: data.size,
      storageKey: data.storageKey,
      uploadedById: admin.id,
    }
  });

  revalidatePath("/admin/media");
  return media;
}

export async function deleteMediaRecord(id: string) {
  await requireAdmin();

  // Find the media record
  const media = await prisma.media.findUnique({
    where: { id }
  });

  if (!media) {
    throw new Error("Media record not found");
  }

  // 1. Delete from UploadThing
  try {
    const res = await utapi.deleteFiles(media.storageKey);
    if (!res.success) {
      console.error("Failed to delete from UploadThing", res);
      // We will still proceed to delete the DB record if we are forcing it, 
      // but usually we want to ensure it's deleted. 
      // UploadThing returns { success: true } if deletion was queued.
    }
  } catch (error) {
    console.error("Error communicating with UploadThing:", error);
    throw new Error("Failed to delete file from storage provider.");
  }

  // 2. Delete from Database
  await prisma.media.delete({
    where: { id }
  });

  revalidatePath("/admin/media");
}

export async function updateMediaAltText(id: string, altText: string) {
  await requireAdmin();

  await prisma.media.update({
    where: { id },
    data: { altText }
  });

  revalidatePath("/admin/media");
}
