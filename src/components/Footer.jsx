import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaQuora } from 'react-icons/fa';
import FooterClock from '../assets/FooterClock.svg';
import Location from '../assets/Location.svg';
import Train from '../assets/Train.svg';

const Footer = () => {
  return (
    <footer className="bg-[#092852] text-white pt-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">Contact us</h3>
            <p className="text-base mb-2 text-gray-300">Address: amet, consetetur sadipscing elitr, sed diam</p>
            <p className="text-base mb-2 text-gray-300">Email: eirmod tempor invidunt ut labore et dolore</p>
            <p className="text-base mb-2 text-gray-300">Phone no: 123456789</p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-start md:items-center">
            <h3 className="text-2xl font-medium mb-5 text-left md:text-center">Follow us</h3>
            <div className="flex space-x-7 text-4xl text-gray-300 font-black">
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-400">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Quora" className="hover:text-gray-400">
                <FaQuora />
              </a>
            </div>
          </div>

          {/* Head Office */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-4">Head Office</h3>
            <div className="flex items-start text-sm mb-4 text-gray-300">
              <img src={Location} alt="Location" className="mr-3 text-2xl -mb-1" />
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
            </div>
            <div className="flex items-center text-sm mb-4 text-gray-300">
              <img src={FooterClock} alt="Clock" className="mr-3 text-xl" />
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className="flex items-center text-sm mb-4 text-gray-300">
              <img src={FooterClock} alt="Clock" className="mr-3 text-sm" />
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div className="flex items-center text-base mb-4 text-gray-300">
              <img src={Train} alt="Train" className="mr-3 text-sm" />
              <p>Lorem ipsum asd asdsaaweeq Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="mt-16 border-t border-gray-700 pt-4 pb-4 text-center text-base bg-[#002F5F]">
        <p>&copy; 2021 All Rights Reserved. <a href="#" className="no-underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
