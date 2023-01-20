import React from 'react'
import {data} from '../data/data.js'
import Form from './Form.jsx'
import ContactForm from './ContactFormTest.jsx'

const TestSection = () => {

  const endpoint = "https://1pmu7gfk1m.execute-api.us-west-1.amazonaws.com/default/mail_fwd_js"
  
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default TestSection;