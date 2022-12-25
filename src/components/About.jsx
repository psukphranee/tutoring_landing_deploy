import React from 'react'
import { data } from '../data/data'

const About = () => {
  return (
    <div className="">
        {/* About */}
      <section className="m-2 p-2 bg-blue-100">
        <div className="flex bg-blue-100 flex-col">
          {/* heading */}
          <div className='p-2 w-full bg-blue-200'>
            <h2 className="text-3xl font-bold text-center">About</h2>
          </div>
          {/* content */}
          <div className="flex md:flex-row md:justify-around">
            {/* profile picture */}
            <div className='hidden border-2 border-black md:block md:h-full'>
              <svg height="100%"  style={{fill: 'yellow', stroke: 'black', strokeWidth: '2px'}}>
                <circle cx="50%" cy="50%" r="50%" />
                <circle cx="35%" cy="35%" r="10%" fill="#000" />
                <circle cx="65%" cy="35%" r="10%" fill="#000" />
                <path d="M 35%,65% q 15,20 30,0" stroke="#000" strokeWidth="5" fill="#000" />
              </svg>
            </div>
            {/* description */}
            <div className="flex items-center justify-center flex-col md:flex-row">
              <div className="m-2 p-2 max-w-xl">
                <p className="font-semibold mb-2">Panya Sukphranee</p>
                <p>
                  {
                    data.About.description
                  }
                </p>
                <p className="text-lg"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About