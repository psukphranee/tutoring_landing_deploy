import React from 'react'
import { data } from '../data/data'

const Pricing = () => {
  return (
    <div className="w-full">
      {/* Pricing */}
      <section className="rounded-lg p-2 bg-blue-100" id='Pricing'>
        <div className='p-2 w-full bg-blue-200'>
            <h2 className="text-3xl font-bold text-center">Pricing</h2>
        </div>
        <div>
            <ul className="list-none p-2">
              {
              data.Pricing.map((item, index) => (
                <li className='px-2 m-2' key={item.title}>
                  <h3 className='font-bold'>
                    {item.price}
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

export default Pricing