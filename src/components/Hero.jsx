import React from 'react'
import { useRef } from 'react'
// import hero_image from "../assets/manhattan_library_1.jpg"

const Hero = () => {

  const scrollToServices = () => {
    document.getElementById('services').scrollIntoView({behavior: "smooth"})
  }

  return (
    <section className="hero rounded-lg w-full bg-black flex flex-col">
        {/* Introduction */}
        <div className='bg-cover flex flex-col h-screen items-center justify-center'>
            <header className="text-center py-16 px-4">
                <h1 className="text-4xl text-white font-bold my-2">Math Tutoring Service</h1>
                <p className="text-xl text-white text-shadow-md font-semibold">Expert help with math homework, exams, and more</p>
            </header>
            <button 
              onClick={scrollToServices}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Learn More
            </button>
        </div>
    </section>
  )
}

export default Hero