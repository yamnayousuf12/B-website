import React from 'react'
import Serviceshero from './Serviceshero'
import Servicestx from './Servicestx'
import ChooseServ from './ChooseServ'
import FAQAccordion from './FAQAccordion'
import Servcontact from './Servcontact'

const page = () => {
  return (
    <div><Serviceshero/>
    <Servicestx/>
    <ChooseServ/>
    <FAQAccordion/>
    <Servcontact/>
    </div>
  )
}

export default page