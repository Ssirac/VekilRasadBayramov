import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Results } from "@/components/Results";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <PracticeAreas />
      <Results />
      <Testimonials />
      <Contact />
    </>
  );
}
