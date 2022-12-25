import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* Contact */}
      <section className="m-2 p-2 bg-blue-100">
        {/* heading */}
        <div className='p-2 w-full bg-blue-200'>
          <h2 className="text-3xl font-bold text-center">Contact</h2>
        </div>
        {/* content */}
        <div className='flex justify-center border-dashed'>
          {/* form */}
          <div className="w-full p-2 max-w-2xl">
            <form method="POST" action="/send-message">
              <div className='flex flex-col p-2'>
                <label htmlFor="name" className="my-2">Name:</label>
                <input type="text" id="name" name="name" className="outline" />
                <label htmlFor="email" className="my-2">Email:</label>
                <input type="email" id="email" name="email" className="outline" />
                <label htmlFor="message" className="my-2">Message:</label>
                <textarea id="message" name="message" className="p-2 outline" />
                <div className='w-full flex justify-center p-2 m-2'>
                  <button type="submit" className="btn-primary m-2 outline">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact