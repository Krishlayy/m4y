import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OurWork from "@/components/home/OurWork";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-[#0A0A0A] overflow-hidden pt-16">
        <OurWork />
      </main>
      <Footer />
    </>
  );
}
