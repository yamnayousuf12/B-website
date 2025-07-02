// pages/index.tsx
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import HFeaturesSection from "./components/Home/HFeaturesSection";
import HProcessSteps from "./components/Home/HProcessSteps";
import HSolutions from "./components/Home/HSolutions";
import HStatsSection from "./components/Home/HStatsSection";
import HTechPartners from "./components/Home/HTechPartners";
import HDevJourneyTimeline from "./components/Home/HDevJourneyTimeline";
import Highlight from "./components/Home/Highlight";
import HAbout from "./components/Home/Testimoial";
import CaseStudies from "./components/Home/CaseStudies";
import BlogSection from "./components/Home/BlogSection";
import ContactCTA from "./components/Home/ContactCTA";
import Footer from "./components/Home/Footer";


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
      <Highlight/>
      <HAbout/>
      <CaseStudies/>
      <BlogSection/>
      <ContactCTA/>
      <Footer/>
    </>
  );
}
