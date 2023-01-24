import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {

  return (
    <section className="rounded-lg my-2 p-2 bg-blue-100" id='Contact'>
      <div className='flex justify-center border-dashed'>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact