import AnnouncementBar from "./components/sections/AnnouncementBar";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import TheProblem from "./components/sections/TheProblem";
import WhatYaapCanDo from "./components/sections/WhatYaapCanDo";
import HowItWorks from "./components/sections/HowItWorks";
import BudgetFirst from "./components/sections/BudgetFirst";
import ForVendorsRiders from "./components/sections/ForVendorsRiders";
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
        <TheProblem />
        <WhatYaapCanDo />
        <HowItWorks />
        <BudgetFirst />
        <ForVendorsRiders />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
