import React from 'react'
// import hero_image from "../assets/manhattan_library_1.jpg"

const Hero = () => {
  return (
    <div className="rounded-lg w-full bg-black">
        {/* Introduction */}
        <div className='hero bg-cover flex h-screen'>
            <header className="text-center py-16 px-4 m-auto">
                <h1 className="text-4xl text-white font-bold my-2">Math Tutoring Service</h1>
                <p className="text-xl text-white text-shadow-md font-semibold">Expert help with math homework, exams, and more</p>
            </header>
        </div>
    </div>
  )
}

export default Hero