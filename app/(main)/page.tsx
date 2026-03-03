import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Packages from "@/components/sections/Packages";
import Process from "@/components/sections/Process";
import ShowcasePreview from "@/components/sections/ShowcasePreview";
import Advantages from "@/components/sections/Advantages";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Packages />
      <Process />
      <ShowcasePreview />
      <Advantages />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
