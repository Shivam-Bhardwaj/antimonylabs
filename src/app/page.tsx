import NeuralCanvas from "@/components/NeuralCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyNow from "@/components/WhyNow";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <NeuralCanvas />
      <Navbar />
      <main className="relative z-10 w-full">
        <Hero />
        <WhyNow />
        <Services />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
