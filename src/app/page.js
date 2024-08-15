import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Showroom from "@/components/showroom/Showroom";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen items-center gap-6 pt-8">
      <Header />
      <Hero />
      <Showroom />
    </main>
  );
}
