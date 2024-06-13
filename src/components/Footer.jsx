import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaQuora } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#092852] text-white pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Contact Us */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <p className="text-xs mb-2">Address: amet, consetetur sadipscing elitr, sed diam</p>
            <p className="text-xs mb-2">Email: eirmod tempor invidunt ut labore et dolore</p>
            <p className="text-xs mb-2">Phone no: 123456789</p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4 text-xl">
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
            <h3 className="text-lg font-semibold mb-4">Head Office</h3>
            <p className="text-xs mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.</p>
            <p className="text-xs mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            <p className="text-xs mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            <p className="text-xs mb-2">Lorem ipsum asd asdsaaweeq Lorem Ipsum</p>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 pb-4 text-center text-xs bg-[#002F5F]">
        <p>&copy; 2021 All Rights Reserved. <a href="#" className="underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
