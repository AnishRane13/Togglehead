import React, { useState, useEffect } from 'react';
import background from '../assets/Slide.svg';
import TriangleIcon from '../assets/Triangle.png';

const slides = [
  { id: 1, title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan elit, non fermentum quam. Etiam eu nibh aliquet lorem viverra interdum. Integer sollicitudin urna massa, sit amet fermentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan elit, non fermentum quam. Etiam eu nibh aliquet lorem viverra interdum. Integer sollicitudin urna massa, sit amet fermentum stet casa lid' },
  { id: 3, title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan elit, non fermentum quam. Etiam eu nibh aliquet lorem viverra interdum. Integer sollicitudin urna massa, sit amet fermentum stet casa lid' },
  { id: 4, title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan elit, non fermentum quam. Etiam eu nibh aliquet lorem viverra interdum. Integer sollicitudin urna massa, sit amet fermentum stet casa lid' },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex h-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          // Inside the map function for rendering slides
<div key={slide.id} className="w-full h-full flex-shrink-0 flex flex-col justify-center bg-[#F6F6F6] md:pl-20 py-0">
  <div className="flex w-full items-center justify-between flex-col lg:flex-row p-4 lg:p-0">
    <div className="max-w-lg px-4 text-center lg:text-left">
      <h2 className="text-2xl lg:text-4xl font-medium text-[#12406F] mt-6"> {/* Increased margin-top */}
        {slide.title}
      </h2>
      <p className="text-gray-700 text-lg font-light mt-4">{slide.content}</p>
      <div className="flex justify-center lg:justify-start mt-4 -mb-8 lg:mb-0"> {/* Increased margin-bottom */}
        <button
          type="submit"
          className="flex items-center bg-[#12406F] text-white p-2 rounded-2xl hover:bg-[#0E3557] transition-colors duration-300 text-base mb-8 font-medium px-7 py-4"
          style={{ minWidth: '120px' }}
        >
          Know More
          <img
            src={TriangleIcon}
            alt="Triangle"
            className="ml-2 h-3"
          />
        </button>
      </div>
    </div>
    <div className="w-full lg:w-2/5 flex items-center justify-center mt-8 lg:mt-0">
  
      <img src={background} alt="background" className="w-full lg:w-auto h-56 lg:h-full object-cover" />
    </div>
  </div>
</div>

        ))}
      </div>
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`transition-all duration-300 ${index === currentSlide ? 'w-1 h-6 bg-[#FFFFFF]' : 'w-1 h-1 bg-[#FFFFFF]'} rounded-full`}
            style={{ borderRadius: index === currentSlide ? '4px' : '50%' }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;