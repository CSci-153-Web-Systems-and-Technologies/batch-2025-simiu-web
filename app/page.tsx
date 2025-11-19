import BentoGrid from "./_components/BentoGrid";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Features } from "./_components/Features";
import FAQ from "./_components/faq";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BentoGrid />
      <Features />
      <FAQ />
    </>
  );
}
