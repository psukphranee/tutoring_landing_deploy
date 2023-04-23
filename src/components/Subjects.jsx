import { CheckIcon } from '@heroicons/react/20/solid';
import {data} from '/src/data/data.js';

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Subjects() {

  const scrollToServices = () => {
    document.getElementById('Location').scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="bg-white py-24 sm:py-32" id="Subjects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Subjects</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one Mathematics Instruction</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Enhance your learning journey through tutoring. Accelerate your progress with personalized guidance and support. Time saved is just as invaluable as the knowledge you gain. Let us help you achieve your learning goals efficiently and effectively.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {data.Subjects.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute top-1 left-0 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2 hidden md:block">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <button 
                onClick={scrollToServices}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Learn More
        </button>
      </div>
    </div>
  )
}
