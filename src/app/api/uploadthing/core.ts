import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { requireAdmin } from "@/lib/admin/auth";

const f = createUploadthing();

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      try {
        // This code runs on your server before upload
        const admin = await requireAdmin();
        
        // Whatever is returned here is accessible in onUploadComplete as `metadata`
        return { adminId: admin.id };
      } catch (e) {
        throw new UploadThingError("Unauthorized");
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for adminId:", metadata.adminId);
      console.log("file url", file.url);
      console.log("file storage key", file.key);

      // We will let the client call a separate Server Action to store the file
      // in our database for better control and error handling.
      // Alternatively, we could save to DB right here. But saving via a server action
      // allows the client form to immediately know the resulting DB ID if needed.
      return { uploadedBy: metadata.adminId, url: file.url, key: file.key };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
