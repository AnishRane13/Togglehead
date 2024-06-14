import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: "How does an investor gain access to MF Utility?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    question: "Will investors be able to have multiple Common Account Numbers?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
  {
    question: "How does an investor gain access to MF Utility?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 text-sm leading-normal">
      <h2 className="text-3xl font-medium text-center mb-10 text-[#12406F]">FAQ</h2>
      {faqData.map((faq, index) => (
        <div key={index} className={`mb-4 ${openIndex === index ? 'border-blue-500' : 'border-gray-300'}`}>
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full text-left flex justify-between items-center py-4 px-4 focus:outline-none bg-transparent border-b ${openIndex === index ? 'border-blue-500' : 'border-gray-300'}`}
          >
            <span className={`font- pr-8 ${openIndex === index ? 'text-blue-500' : 'text-gray-700'}`}>
              {faq.question}
            </span>
            <span className={`flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full ${openIndex === index ? 'bg-[#12406F] text-white' : 'bg-gray-200'}`}>
              {openIndex === index ? <FaMinus /> : <FaPlus/>}
            </span>
          </button>
          {openIndex === index && (
            <div className={`py-4 px-4 bg-transparent border-b text-left ${openIndex === index ? '' : 'border-gray-300'}`}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;