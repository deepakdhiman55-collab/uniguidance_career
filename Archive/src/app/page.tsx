import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProcessFunnel } from "@/components/ProcessFunnel";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Services />
      <WhyChooseUs />
      <ProcessFunnel />
      <Footer />
    </main>
  );
}
