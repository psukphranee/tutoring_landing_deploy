import { useState } from 'react';

export default function TestComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: '/src/assets/jmm_background.jpg', caption: 'Slide 1', info: "ONE" },
    { image: '/src/assets/jmm_group.jpg', caption: 'Slide 2', info: "TWO"  },
    { image: '/src/assets/self.jpg', caption: 'Slide 3', info: "THREE"  },
  ];

  const handlePrev = () => {
    console.log((currentSlide - 1 + slides.length) % slides.length);
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    console.log((currentSlide + 1) % slides.length);
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="flex flex-row overflow-x-scroll snap-x snap-mandatory">
      <div className="flex-none max-h-screen flex-shrink-0 snap-start">
        <img className="object-cover w-screen h-full" src="/src/assets/jmm_background.jpg" />
      </div>
      <div className="flex-none max-h-screen flex-shrink-0 snap-start">
        <img className="object-cover w-screen h-full" src="/src/assets/jmm_group.jpg" />
      </div>
      <div className="flex-none max-h-screen flex-shrink-0 snap-start">
        <img className="object-cover w-screen h-full" src="/src/assets/self.jpg" />
      </div>
    </div>


    // <div className="relative w-full overflow-hidden ">
    //   <div className="flex h-full">
    //     {slides.map((slide, index) => (
    //       <div
    //         key={index}
    //         className={`flex-shrink-0 h-full w-full transition duration-500 ease-in-out transform ${
    //           index === currentSlide ? 'block' : 'hidden'
    //         }`}
    //       >
    //         {/* <p>
    //           {slide.info}
    //         </p> */}
    //         <img
    //           className="h-full w-screen object-cover"
    //           src={slide.image}
    //           alt={slide.caption}
    //         />
    //       </div>
    //     ))}
    //   </div>
    //   <button
    //     className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-900 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-l"
    //     onClick={handlePrev}
    //   >
    //     Previous
    //   </button>
    //   <button
    //     className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-900 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-2 px-4 rounded-r"
    //     onClick={handleNext}
    //   >
    //     Next
    //   </button>
    // </div>
  );
}
