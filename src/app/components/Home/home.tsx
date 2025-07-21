import React from 'react'

import Hero from './Hero'
import HStatsSection from './HStatsSection'
import HFeaturesSection from './HFeaturesSection'
import HProcessSteps from './HProcessSteps'
import HSolutions from './HSolutions'
import BlogSection from './BlogSection'
import HTechPartners from './HTechPartners'
import HDevJourneyTimeline from './HDevJourneyTimeline'

import ContactCTA from './ContactCTA'
import CaseStudies from './CaseStudies'
import Highlight from "./Highlight";
import Testimoial from "./Testimoial";

const Home = () => {
  return (
    <div>
      <Hero />
      <HStatsSection />
      <HFeaturesSection />
      <HProcessSteps/>
      <HSolutions />
      <HTechPartners />
      <HDevJourneyTimeline />
      <Highlight/>
      <Testimoial/>
      <CaseStudies/>
      <BlogSection/>
      <ContactCTA/>
      </div>
  )
}

export default Home