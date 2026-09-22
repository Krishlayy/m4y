import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "M4Y — Technical Growth Agency",
    short_name: "M4Y",
    description: "Premier digital marketing agency blending performance marketing, AI automation, and founder-level execution.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FF5500",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
