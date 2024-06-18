import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  // Define menuItems first
  const menuItems = [
    { name: 'Qualifications', options: ['Option 1', 'Option 2', 'Option 3'] },
    { name: 'Organizations', options: ['Option 1', 'Option 2', 'Option 3'] },
    { name: 'Research & Analysis', options: ['Option 1', 'Option 2', 'Option 3'] },
    { name: 'Lorem ipsum', options: ['Option 1', 'Option 2', 'Option 3'] },
    { name: 'Lorem ipsum', options: ['Option 1', 'Option 2', 'Option 3'] },
  ];

  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(Array(menuItems.length).fill(false)); // State for each dropdown

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle dropdown menu
  const toggleDropdown = (index) => {
    const newDropdownState = [...dropdownOpen]; // Create a copy of dropdownOpen array
    newDropdownState[index] = !newDropdownState[index]; // Toggle the clicked dropdown
    
    setDropdownOpen(newDropdownState);
  };

  return (
    <nav className="bg-[#12406F] pl-4 md:pl-24 pr-4 py-5 "> {/* Responsive padding */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-3xl font-sans">LOGO</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-md font-sans"> {/* Reduced spacing */}
          {menuItems.map((item, index) => (
            <Menu as="div" key={item.name} className="relative inline-block text-left font-semibold">
              <div>
                <Menu.Button className="inline-flex justify-center w-full text-white hover:text-gray-300 transition duration-300">
                  {item.name}
                  <ChevronDownIcon className="w-4 h-4 ml-1 -mr-1 mt-1 font-semibold" aria-hidden="true" />
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
                <Menu.Items className="origin-top-right absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
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
          <div className="flex items-center space-x-3"> {/* Reduced spacing */}
            <MagnifyingGlassIcon className="w-6 h-6 text-white hover:text-gray-300 transition duration-300 mx-3" />
            <button className="bg-white text-[#12406F] px-7 py-3 rounded-xl hover:bg-gray-100 transition duration-300 font-medium text-lg">Enrolment</button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {isOpen ? <XMarkIcon className="w-6 h-6 mr-4" /> : <Bars3Icon className="w-6 h-6 mr-4" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-4 rounded-md pt-4">
          {menuItems.map((item, index) => (
            <div key={item.name} className="mb-2">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex justify-between items-center w-full text-white px-4 py-2 bg-[#12406F] rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                {item.name}
                <ChevronDownIcon className="w-4 h-4 ml-2 -mr-1 text-white" aria-hidden="true" />
              </button>
              {dropdownOpen[index] && (
                <div className="bg-white z-50 mt-2 rounded-lg shadow-lg overflow-hidden">
                  {item.options.map((option, optionIndex) => (
                    <a
                      key={optionIndex}
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150"
                    >
                      {option}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center space-x-3 px-4 py-2 mt-4">
            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
            <button className="bg-white text-[#12406F] px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-300 w-full">
              Enrolment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
