import React from 'react'
import Form from './Form'

const Contact = () => {



  return (
    <div className='w-full'>
      {/* Contact */}
      <section className="rounded-lg my-2 p-2 bg-blue-100" id='Contact'>
        {/* heading */}
        <div className='p-2 w-full bg-blue-200'>
          <h2 className="text-3xl font-bold text-center">Contact</h2>
        </div>
        {/* content */}
        <div className='flex justify-center border-dashed'>
          {/* form */}
          <div className="w-full p-2 max-w-2xl">
            <Form />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact