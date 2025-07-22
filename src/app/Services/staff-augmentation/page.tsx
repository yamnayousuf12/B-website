import React from 'react'
import Shero from './Shero'
import Stext from './Stext'
import Sserv from './Sserv'
import Sfaq from './Sfaq'
import Staffcontact from './Staffcontact'
// import SContact from './Staffcontact'


const page = () => {
  return (
    <div><Shero/>
    <Stext/>
    <Sserv/>
    <Sfaq/>
    {/* <SContact/> */}
    <Staffcontact/>
    </div>
  )
}

export default page