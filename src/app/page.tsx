import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import PrestigiousFirms from "@/components/PrestigiousFirms";
import Testimonials from "@/components/Testimonials";
import FounderQuote from "@/components/FounderQuote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-light-bg overflow-x-hidden pt-0">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <PrestigiousFirms />
      <Testimonials />
      <FounderQuote />
      <Contact />
      <Footer />
    </main>
  );
}
