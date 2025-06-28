// pages/index.tsx
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import HFeaturesSection from "./components/Home/HFeaturesSection";
import HProcessSteps from "./components/Home/HProcessSteps";
import HSolutions from "./components/Home/HSolutions";
import HStatsSection from "./components/Home/HStatsSection";
import HTechPartners from "./components/Home/HTechPartners";
import HDevJourneyTimeline from "./components/Home/HDevJourneyTimeline";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HStatsSection />
      <HFeaturesSection />
      <HProcessSteps/>
      <HSolutions />
      <HTechPartners />
      <HDevJourneyTimeline />
    </>
  );
}
