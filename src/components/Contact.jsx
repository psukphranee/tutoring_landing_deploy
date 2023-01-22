import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {

  return (
    <div className='w-full'>
      <section className="rounded-lg my-2 p-2 bg-blue-100" id='Contact'>
        <div className='p-2 w-full bg-blue-200'>
          <h2 className="text-3xl font-bold text-center">Contact</h2>
        </div>
        <div className='flex justify-center border-dashed'>
          <div className="w-full p-2 max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact