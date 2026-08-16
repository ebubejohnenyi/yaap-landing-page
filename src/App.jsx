import AnnouncementBar from "./components/sections/AnnouncementBar";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import LogoCloud from "./components/sections/LogoCloud";
import About from "./components/sections/About";
import Values from "./components/sections/Values";
import StatsBanner from "./components/sections/StatsBanner";
import FAQ from "./components/sections/FAQ";
import CTABanner from "./components/sections/CTABanner";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink-900">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <About />
        <Values />
        <StatsBanner />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
