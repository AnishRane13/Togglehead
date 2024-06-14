import React from 'react';

const UpcomingExaminations = () => {
  return (
    <div className="bg-white py-8 px-6 md:px-24">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-8 md:mb-0 text-left">
          <h2 className="text-4xl font-normal text-[#12406F]">Upcoming</h2>
          <h2 className="text-4xl font-normal text-[#12406F]">Examinations</h2>
          <p className="text-gray-500 mt-2">Enquire about the examination</p>
          <p className="text-gray-500 ">register for the exams</p>
        </div>
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
          <div className="flex items-start">
            <i className="fa-light fa-calendar-clock text-4xl text-[#12406F] mr-4"></i>
            <div>
              <p className="text-[#12406F] font-semibold">02th October 2014</p>
              <p className="text-gray-500">Level 1 exam</p>
              <p className="text-gray-500 whitespace-pre-line"></p>
            </div>
          </div>
          <div className="flex items-start ">
            <i className="fa-light fa-calendar-clock text-4xl text-[#12406F] mr-4"></i>
            <div>
              <p className="text-[#12406F] font-semibold">Nov-Dec 2016</p>
              <p className="text-gray-500">Level 2</p>
              <p className="text-gray-500 whitespace-pre-line">Lorem Ipsum
              Lorem Ipsum</p>
            </div>
          </div>
          <div className="flex items-start">
            <i className="fa-light fa-calendar-clock text-4xl text-[#12406F] mr-4"></i>
            <div>
              <p className="text-[#12406F] font-semibold">Ongoing this year</p>
              <p className="text-gray-500">Level 3 (Grad)</p>
              <p className="text-gray-500 whitespace-pre-line"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingExaminations;
