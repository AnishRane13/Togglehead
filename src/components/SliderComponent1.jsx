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
    slidesToShow: 3,
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
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px' // Adjust as needed
        }
      },
      {
        breakpoint: 1280, // New breakpoint for large desktop
        settings: {
          slidesToShow: 3.5, // Display 3.5 cards
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          initialSlide: 1, // Show half of the first card at the beginning
          variableWidth: true,
          responsive: [
            {
              breakpoint: 1440, // Further adjust for very large screens if needed
              settings: {
                slidesToShow: 4,
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <div className="bg-white py-12 overflow-hidden">
      <div className="max-w-full mx-auto px-4 lg:px-8 xl:px-24"> {/* Adjusted padding for larger screens */}
        <Slider {...settings} className="-mx-2">
          {sliderData.map((item, index) => (
            <div key={index} className="px-2 lg:px-4"> {/* Increase px-2 to px-4 for desktop */}
              <div className="bg-[#12406F] text-white p-6 pr-8 py-10 rounded-2xl shadow-lg h-full flex flex-col justify-between relative overflow-hidden">
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
