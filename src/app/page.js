import Contact from "@/components/contact/Contact";
import Details from "@/components/details/Details";
import Showroom from "@/components/showroom/Showroom";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen items-center px-2 py-8 border border-red-500">
      <h1 className="text-2xl text-white font-bold">Alan Duran <span>—</span> Dubai Real Estate</h1>
      <div className="flex flex-col w-full">
        <div className="w-full h-full p-1 border border-blue-500">
          <Contact />
        </div>
        <div className="w-full flex flex-col">
          <Showroom />
          <Details />
        </div>
      </div>
    </main>
  );
}
