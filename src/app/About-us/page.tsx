import React from 'react'
import Abouthero from './Abouthero'
import Aboutus from './Aboutus'
import AJourney from './AJourney'
import MissionTrust from './MissionTrust'
import ContactCTA from '../components/Home/ContactCTA'


const page = () => {
  return (
    <div>
     <Abouthero/>
     <AJourney/>
     <MissionTrust/>
     <Aboutus/>
     <ContactCTA/>
     
    </div>
  )
}

export default page