import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Packages from "@/components/sections/Packages";
import HowWeWork from "@/components/sections/Testimonials";
import ShowcasePreview from "@/components/sections/ShowcasePreview";
import Advantages from "@/components/sections/Advantages";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Packages />
      <HowWeWork />
      <ShowcasePreview />
      <Advantages />
      <FAQ />
      <CTABanner />
    </>
  );
}
