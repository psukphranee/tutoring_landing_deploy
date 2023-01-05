import React from 'react'

import { data } from '../data/data'

const Services = () => {
  return (
    <div className="w-full">
        {/* Services */}
      <section className="rounded-lg my-2 p-2 bg-blue-100">
          <div className='border-black p-2 w-full bg-blue-200'>
            <h2 className="text-3xl font-bold text-center">Services</h2>
          </div>
          <div>
            <ul className="list-none p-2">
              {
              data.Services.descriptions.map((item, index) => (
                <li className='px-2 m-2' key={item.title}>
                  <h3 className='font-bold'>
                    {item.title}
                  </h3>
                  <p>
                    {item.description}
                  </p>
                </li>
                ))
              }
            </ul>
          </div>
        </section>
    </div>
  )
}

export default Services