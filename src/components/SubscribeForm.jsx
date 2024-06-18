import React from 'react';
import phoneBg from '../assets/Phone.svg'; 
import TriangleIcon from '../assets/Triangle.png'; 

const SubscribeForm = () => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16 bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="md:flex md:items-center">
        <div className="p-6 md:w-7/12 pr-28">
          <h2 className="text-2xl font-bold mb-2">Subscribe</h2>
          <p className="text-gray-600 mb-4 text-xs pr-28">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          <form className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="w-full p-2 border border-gray-300 rounded mb-4 md:mb-0 text-sm"
              style={{ height: '40px' }}
            />
            <button
              type="submit"
              className="relative flex items-center justify-center bg-[#12406F] text-white p-2 rounded-xl hover:bg-[#0E3557] transition-colors duration-300 text-xs font-semibold"
              style={{ minWidth: '120px' }}
            >
              Subscribe Now
              <img
                src={TriangleIcon}
                alt="Triangle"
                className="ml-2 h-2"
              />
            </button>
          </form>
        </div>
        <div className="md:w-5/12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${phoneBg})`, minHeight: '300px' }}>
          {/* If you need additional content here, add it inside this div */}
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
