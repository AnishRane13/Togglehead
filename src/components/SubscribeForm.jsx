import React from 'react';
import phoneBg from '../assets/Phone.svg'; 
import TriangleIcon from '../assets/Triangle.png'; 

const SubscribeForm = () => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16 bg-white shadow-lg rounded-lg overflow-hidden mt-12">
      <div className="md:flex md:items-center">
        <div className="p-6 md:w-7/12 pr-28">
          <h2 className="text-3xl font-medium mb-2 text-[#12406F]">Subscribe</h2>
          <p className="text-gray-600 mb-4 text-md pr-28">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
          </p>
          <form className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="w-full md:w-auto flex-1 p-6 border border-gray-100 rounded-lg mb-4 md:mb-0 text-md shadow-md"
              style={{ height: '40px' }}
            />
            <button
              type="submit"
              className="relative flex items-center justify-center bg-[#12406F] text-white px-6 py-6 rounded-xl hover:bg-[#0E3557] transition-colors duration-300 text-sm font-medium"
              style={{ minWidth: '150px', height: '40px' }}
            >
              Subscribe Now
              <img
                src={TriangleIcon}
                alt="Triangle"
                className="ml-2 h-3"
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
