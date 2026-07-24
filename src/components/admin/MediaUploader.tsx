"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { saveMediaRecord } from "@/lib/admin/media-actions";
import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function MediaUploader() {
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className="border-4 border-black hard-shadow bg-white p-6 mb-8">
      <h2 className="text-xl font-black uppercase tracking-widest mb-4">Upload New Media</h2>
      
      {success ? (
        <div className="flex flex-col items-center justify-center p-8 border-4 border-black border-dashed bg-green-50 text-green-700">
          <CheckCircle2 className="w-12 h-12 mb-2" />
          <p className="font-bold uppercase tracking-widest">Upload Complete</p>
          <button 
            onClick={() => setSuccess(false)}
            className="mt-4 px-6 py-2 bg-black text-white font-bold uppercase text-sm hover:bg-[#FFD700] hover:text-black transition-colors"
          >
            Upload Another
          </button>
        </div>
      ) : (
        <div className={`transition-opacity ${isUploading ? "opacity-50 pointer-events-none" : ""}`}>
          <UploadDropzone
            endpoint="imageUploader"
            onUploadBegin={() => {
              setIsUploading(true);
            }}
            onClientUploadComplete={async (res) => {
              // res is an array of objects from the server
              if (res && res.length > 0) {
                for (const file of res) {
                  await saveMediaRecord({
                    name: file.name,
                    url: file.url,
                    type: file.type || "image/unknown",
                    size: file.size,
                    storageKey: file.serverData?.key || file.key, // fallback just in case
                  });
                }
              }
              setIsUploading(false);
              setSuccess(true);
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
              setIsUploading(false);
            }}
            appearance={{
              container: "border-4 border-black border-dashed bg-gray-50 hover:bg-gray-100 transition-colors p-8",
              button: "bg-[#FF3B00] text-white border-4 border-black font-black uppercase tracking-widest px-8 py-3 after:bg-[#FF3B00]",
              allowedContent: "text-gray-500 font-bold uppercase text-xs mt-2"
            }}
          />
          {isUploading && (
            <div className="mt-4 flex items-center justify-center gap-2 text-[#0044FF] font-bold uppercase tracking-widest">
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing Upload...
            </div>
          )}
        </div>
      )}
    </div>
  );
}
