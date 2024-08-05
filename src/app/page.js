import Contact from "@/components/contact/Contact";
import Showroom from "@/components/showroom/Showroom";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen items-center p-2">
      <h1 className="text-2xl text-white font-bold font-bona">Alan Duran <span>—</span> Dubai Real Estate</h1>
      <div className="flex flex-col w-full gap-10">
        <Showroom />
        <Contact />
      </div>
    </main>
  );
}
