import Contact from "@/components/contact/Contact";
import Details from "@/components/details/Details";
import Showroom from "@/components/showroom/Showroom";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen items-center px-2 py-6">
      <h1 className="text-2xl text-white font-bold font-bona">Alan Duran <span>—</span> Dubai Real Estate</h1>
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-col">
          <Showroom />
          <Details />
        </div>
        <div className="w-full h-full p-1">
          <Contact />
        </div>
      </div>
    </main>
  );
}
