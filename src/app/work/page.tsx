import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OurWork from "@/components/home/OurWork";
import { getPublishedProjects } from "@/lib/public-data";

export const revalidate = 60;

export default async function WorkPage() {
  const projects = await getPublishedProjects();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden pt-40">
        <OurWork projects={projects as any} />
      </main>
      <Footer />
    </>
  );
}
