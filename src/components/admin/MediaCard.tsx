"use client";

import { useState, useTransition } from "react";
import { Copy, Trash2, CheckCircle2, Edit3, X } from "lucide-react";
import { deleteMediaRecord, updateMediaAltText } from "@/lib/admin/media-actions";

export default function MediaCard({ media }: { media: any }) {
  const [copied, setCopied] = useState(false);
  const [isEditingAlt, setIsEditingAlt] = useState(false);
  const [altText, setAltText] = useState(media.altText || "");
  const [isPending, startTransition] = useTransition();

  const handleCopy = () => {
    navigator.clipboard.writeText(media.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this file? This will remove it from the storage provider and cannot be undone.")) return;
    
    startTransition(async () => {
      try {
        await deleteMediaRecord(media.id);
      } catch (err: any) {
        alert(err.message || "Failed to delete media.");
      }
    });
  };

  const handleSaveAlt = () => {
    startTransition(async () => {
      try {
        await updateMediaAltText(media.id, altText);
        setIsEditingAlt(false);
      } catch (err: any) {
        alert(err.message || "Failed to update alt text.");
      }
    });
  };

  const sizeInMB = (media.size / (1024 * 1024)).toFixed(2);

  return (
    <div className={`border-4 border-black hard-shadow bg-white flex flex-col transition-opacity ${isPending ? 'opacity-50 pointer-events-none' : ''}`}>
      <div className="relative aspect-square border-b-4 border-black overflow-hidden bg-gray-100 flex items-center justify-center">
        {media.type.startsWith("image/") ? (
          <img 
            src={media.url} 
            alt={media.altText || media.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="font-black text-4xl text-gray-300 uppercase">FILE</div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1 relative">
        <p className="font-bold text-sm truncate" title={media.name}>{media.name}</p>
        
        {isEditingAlt ? (
          <div className="flex flex-col gap-2 mt-2">
            <input 
              type="text" 
              value={altText} 
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Alt text"
              className="w-full text-xs border-2 border-black p-1 focus:outline-none"
            />
            <div className="flex gap-2">
              <button 
                onClick={handleSaveAlt}
                className="flex-1 bg-black text-white text-[10px] font-bold uppercase py-1"
              >
                Save
              </button>
              <button 
                onClick={() => setIsEditingAlt(false)}
                className="p-1 border-2 border-black"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between text-xs text-gray-600 mt-1">
            <span className="truncate max-w-[150px]">{media.altText || "No alt text"}</span>
            <button onClick={() => setIsEditingAlt(true)} className="hover:text-black">
              <Edit3 className="w-3 h-3" />
            </button>
          </div>
        )}

        <div className="flex justify-between items-center text-xs font-bold text-gray-500 uppercase tracking-widest mt-auto pt-2 border-t-2 border-gray-100">
          <span>{sizeInMB} MB</span>
          <span>{new Date(media.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="flex border-t-4 border-black">
        <button 
          onClick={handleCopy}
          className="flex-1 flex items-center justify-center gap-2 py-3 border-r-4 border-black hover:bg-[#FFD700] transition-colors font-bold uppercase text-xs tracking-widest"
        >
          {copied ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy URL"}
        </button>
        <button 
          onClick={handleDelete}
          className="flex-1 flex items-center justify-center gap-2 py-3 hover:bg-[#FF3B00] hover:text-white transition-colors font-bold uppercase text-xs tracking-widest text-[#FF3B00]"
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
}
