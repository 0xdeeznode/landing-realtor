import Contact from "@/components/contact/Contact";
import Details from "@/components/details/Details";
import Showroom from "@/components/showroom/Showroom";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen items-center p-24">
      <div className="w-[50%] h-full border">
        <Contact />
      </div>
      <div className="w-[50%] flex flex-col">
        <Showroom />
        <Details />
      </div>
    </main>
  );
}
