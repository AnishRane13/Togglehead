import React, { useState, useEffect } from 'react';
import background from '../assets/Slide.svg'; // Adjust the path accordingly

const slides = [
  { id: 1, title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan elit, non fermentum quam. Etiam eu nibh aliquet lorem viverra interdum. Integer sollicitudin urna massa, sit amet fermentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan elit, non fermentum quam. Etiam eu nibh aliquet lorem viverra interdum. Integer sollicitudin urna massa, sit amet fermentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan elit, non fermentum quam. Etiam eu nibh aliquet lorem viverra interdum. Integer sollicitudin urna massa, sit amet fermentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis accumsan elit, non fermentum quam. Etiam eu nibh aliquet lorem viverra interdum. Integer sollicitudin urna massa, sit amet fermentum Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 flex items-center justify-center bg-white md:pl-20">
            <div className="flex w-full h-full items-center justify-between flex-col lg:flex-row">
              <div className="max-w-lg px-4 text-center lg:text-left">
                <h2 className="text-2xl lg:text-4xl font-bold text-[#12406F]">{slide.title}</h2>
                <p className="text-gray-500 mt-4">{slide.content}</p>
                <button className="mt-6 px-4 py-2 bg-[#12406F] text-white rounded-xl">Know More</button>
              </div>
              <div className="w-full lg:w-2/5 h-full flex items-center justify-center">
                <img src={background} alt="background" className="w-full lg:w-auto h-48 lg:h-full object-cover" />
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
