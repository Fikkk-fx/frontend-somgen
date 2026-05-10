import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Squad from "./components/Squad";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ParticleCanvas />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Squad />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
