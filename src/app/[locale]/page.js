import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center gap-6">
      <Hero />
      <About />
    </main>
  );
}
