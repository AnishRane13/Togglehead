import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KnowMoreIcon from '../assets/KnowMore.png'; // Adjust the path as needed

const sliderData = [
  { title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" },
  { title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" },
  { title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" },
  { title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" },
];

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show approximately 3.5 slides
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-24">
        <Slider {...settings} className="-mx-2">
          {sliderData.map((item, index) => (
            <div key={index} className="p-4 pl-0 pr-6">
              <div className="bg-[#12406F] text-white p-6 pr-8 rounded-2xl shadow-lg h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="bg-pattern h-full w-full"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 mt-2">{item.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed">{item.description}</p>
                </div>
                <div className="relative z-10 flex items-center mt-auto">
                  <span className="mr-2 text-lg">Know More</span>
                  <img src={KnowMoreIcon} alt="Know More" className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
