// pages/index.tsx
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import HFeaturesSection from "./components/Home/HFeaturesSection";
import HStatsSection from "./components/Home/HStatsSection";
// import HStatsSection from "./components/HStatsSection";
// import HFeaturesSection from "./components/HFeaturesSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HStatsSection />
      <HFeaturesSection />
    </>
  );
}
