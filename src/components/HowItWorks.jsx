import React from 'react'
import {CardHIW} from './components'

const stats = [
  { name: 'Step 1', desc: 'Book a Free Consultation' },
  { name: 'Step 2', desc: 'Book a Trial Session' },
  { name: 'Step 3', desc: 'Evaluate' },
]

export default function HowItWorks() {
    return (
      <div className="bg-white w-4/5 my-4" id="HowItWorks">
          <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              How it Works
              <br />
            </h2>
            <div>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                    <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#Contact"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Book Now
              </a>
              <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      
    )
  }
  