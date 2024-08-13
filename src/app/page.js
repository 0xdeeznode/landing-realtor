import Contact from "@/components/contact/Contact";
import Showroom from "@/components/showroom/Showroom";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen items-center gap-6 pt-8 px-2">
      <h1 className="text-2xl text-white font-bold font-bona">Alan Duran <span>—</span> Dubai Real Estate</h1>
      <Showroom />
      <Contact />
    </main>
  );
}
