import React, { useState } from 'react';
import add from '../assets/add.svg';
import minus from '../assets/minus.svg';

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
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 text-sm leading-normal my-12">
      <h2 className="text-4xl font-medium text-center mb-10 text-[#12406F]">FAQ</h2>
      {faqData.map((faq, index) => (
        <div key={index} className={`mb-4 ${openIndex === index ? 'border-blue-500' : 'border-gray-300'}`}>
          <button
            onClick={() => toggleFAQ(index)}
            className={`w-full text-left flex justify-between items-center py-4 px-4 focus:outline-none bg-transparent ${openIndex === index ? 'border-[#12406F]' : 'border-gray-200'} ${index !== faqData.length - 1 || openIndex === index ? 'border-b' : ''}`}
          >
            <span className={`text-base pr-8 py-4 ${openIndex === index ? 'text-[#12406F]' : 'text-gray-700'}`}>
              {faq.question}
            </span>
            <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full ${openIndex === index ? 'text-white' : ''}`}>
              <img src={openIndex === index ? minus : add} alt={openIndex === index ? "Collapse" : "Expand"} className="w-8 h-8"/>
            </span>
          </button>
          {openIndex === index && (
            <div className={`py-8 px-4 bg-transparent border-b text-left text-base text-[#525252] font-normal ${index === faqData.length - 1 ? 'border-gray-200' : ''}`}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
