import React from 'react'
import {data} from '../data/data.js'
import ContactForm from './ContactForm.jsx'

const TestSection = () => {

  const endpoint = "https://1pmu7gfk1m.execute-api.us-west-1.amazonaws.com/default/mail_fwd_js"
  
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default TestSection;