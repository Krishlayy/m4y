import { prisma } from "@/lib/prisma";
import MediaUploader from "@/components/admin/MediaUploader";
import MediaCard from "@/components/admin/MediaCard";

export const dynamic = "force-dynamic";

export default async function MediaPage() {
  let mediaItems: Awaited<ReturnType<typeof prisma.media.findMany>> = [];
  let dbError = false;

  try {
    mediaItems = await prisma.media.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (error) {
    console.error("Database error fetching media:", error);
    dbError = true;
  }

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">Media Library</h1>
      </div>

      {dbError && (
        <div className="p-4 bg-[#FF5500] text-white font-bold border-4 border-black">
          ⚠️ Could not connect to database. Media uploads may not persist.
        </div>
      )}

      <MediaUploader />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {mediaItems.length === 0 ? (
          <div className="col-span-full p-12 text-center border-4 border-black bg-white hard-shadow">
            <p className="font-bold text-gray-500 uppercase tracking-widest">No media uploaded yet.</p>
          </div>
        ) : (
          mediaItems.map(media => (
            <MediaCard key={media.id} media={media} />
          ))
        )}
      </div>
    </div>
  );
}
