import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Timeline } from "@/components/sections/Timeline";
import { Footer } from "@/components/sections/Footer";
import { InfiniteGridBackground } from "@/components/ui/the-infinite-grid";

export default function Home() {
  return (
    <>
      <InfiniteGridBackground />
      <main className="relative z-10">
        <Hero />
        <Intro />
        <Timeline />
        <Footer />
      </main>
    </>
  );
}
