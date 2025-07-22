import React from 'react'
import Chatbotsh from './Chatbotsh'
import Chatbotstext from './Chatbotstext'
import Chatbotsserv from './Chatbotsserv'
import Chatbotsfaq from './Chatbotsfaq'
import Chatbotscont from './Chatbotscont'



const page = () => {
  return (
    <div>
        <Chatbotsh/>
        <Chatbotstext/>
        <Chatbotsserv/>
        <Chatbotsfaq/>
        <Chatbotscont/>
        
    </div>
  )
}

export default page