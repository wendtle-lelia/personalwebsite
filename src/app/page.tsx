import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { Footer } from "@/components/sections/Footer";
import { InfiniteGridBackground } from "@/components/ui/the-infinite-grid";

export default function Home() {
  return (
    <>
      <InfiniteGridBackground />
      <main className="relative z-10">
        <Hero />
        <ProjectGrid />
        <Footer />
      </main>
    </>
  );
}
