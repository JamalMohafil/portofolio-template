'use client'
import Approach from "@/components/Approach";
import { AppleCardsCarouselDemo } from "@/components/Carousel";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import { Carousel } from "@/components/ui/AppleCardCarousel";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import { navItems } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="relative  bg-black-100 flex justify-center
     items-center flex-col overflow-clip mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
      </div>
      <Hero />
      <div className="max-w-7xl w-full">
        <Grid />
        <TechStack />
        <RecentProjects />
        <AppleCardsCarouselDemo />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
