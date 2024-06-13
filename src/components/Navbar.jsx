import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const menuItems = [
    { name: 'Qualifications', options: ['Option 1', 'Option 2', 'Option 3'] },
    { name: 'Organizations', options: ['Option 1', 'Option 2', 'Option 3'] },
    { name: 'Research & Analysis', options: ['Option 1', 'Option 2', 'Option 3'] },
    { name: 'Lorem ipsum', options: ['Option 1', 'Option 2', 'Option 3'] },
    { name: 'Lorem ipsum', options: ['Option 1', 'Option 2', 'Option 3'] },
  ];

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-800 px-4 py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">LOGO</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center text-sm">
          {menuItems.map((item) => (
            <Menu as="div" className="relative inline-block text-left" key={item.name}>
              <div>
                <Menu.Button
                  className="inline-flex justify-center w-full text-white hover:text-gray-300 transition duration-300"
                >
                  {item.name}
                  <ChevronDownIcon className="w-4 h-4 ml-1 -mr-1" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95 -translate-y-1"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 -translate-y-1"
              >
                <Menu.Items className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {item.options.map((option, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <a
                            href="/"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block px-4 py-2 text-sm transition duration-150`}
                          >
                            {option}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ))}
          <div className="flex items-center space-x-4">
            <MagnifyingGlassIcon className="w-4 h-4 text-white hover:text-gray-300 transition duration-300" />
            <button className="bg-white text-blue-800 px-3 py-1 rounded hover:bg-gray-100 transition duration-300">Enrolment</button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden">
          {menuItems.map((item, index) => (
            <Menu as="div" className="relative inline-block text-left w-full" key={item.name}>
              <div>
                <Menu.Button
                  className="inline-flex justify-between w-full text-white px-4 py-2 bg-blue-800 hover:bg-blue-700 transition duration-300"
                >
                  {item.name}
                  <ChevronDownIcon className="w-4 h-4 ml-2 -mr-1" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition
                show={isOpen}
                as={Fragment}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95 -translate-y-1"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 -translate-y-1"
              >
                <Menu.Items className="origin-top-right absolute mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {item.options.map((option, optionIndex) => (
                      <Menu.Item key={optionIndex}>
                        {({ active }) => (
                          <a
                            href="/"
                            className={`${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            } block px-4 py-2 text-sm transition duration-150`}
                          >
                            {option}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ))}
          <div className="flex items-center space-x-4 px-4 py-2">
            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
            <button className="bg-white text-blue-800 px-4 py-2 rounded w-full hover:bg-gray-100 transition duration-300">Enrolment</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;