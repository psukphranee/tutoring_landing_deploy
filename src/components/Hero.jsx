import React from 'react'
import hero_image from "../assets/image_1.jpg"

const Hero = () => {
  return (
    <div className="rounded-lg w-full my-2 p-2 bg-blue-100">
        {/* Introduction */}
        <div className=''>
            <header className="text-center py-16 px-4 mx-4 my-8">
                <h1 className="text-4xl font-bold my-2">Math Tutoring Services</h1>
                <p className="text-xl font-semibold">Expert help with math homework, exams, and more</p>
            </header>
        </div>
    </div>
  )
}

export default Hero