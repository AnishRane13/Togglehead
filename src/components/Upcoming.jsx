import React from 'react';
import CalendarIcon from '../assets/Calendar.svg'; // Adjust the path as needed
import ClockIcon from '../assets/Clock.svg'; // Import the clock icon

const UpcomingExaminations = () => {
  const exams = [
    { date: "02th October 2014", level: "Level 1 exam", details: "" },
    { date: "Nov-Dec 2016", level: "Level 2", details: "Lorem Ipsum\nLorem Ipsum" },
    { date: "Ongoing this year", level: "Level 3 (Grad)", details: "" }
  ];

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-24 text-xs leading-normal bg-white mt-16">
      <div className="max-w-full mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h2 className="text-3xl font-medium text-[#12406F] text-left">Upcoming</h2>
          <h2 className="text-3xl font-medium text-[#12406F] text-left">Examinations</h2>
          <p className="text-gray-700 mt-2 text-left font-light lg:pr-16 text-sm">Enquire about the examination & register for the exams</p>
        </div>
        {/* Add a faint line separator */}
        <div className="border-l border-gray-300 my-4 md:my-0 md:-ml-3 md:mr-16"></div>
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
          {exams.map((exam, index) => (
            <div key={index} className="flex items-start text-left">
              <div className="flex items-center mr-4 mt-2">
                <img src={CalendarIcon} alt="Calendar" className="w-12 h-12 text-blue-800"/>
              </div>
              <div>
                <p className="text-[#12406F] font-semibold text-xl">{exam.date}</p>
                <p className="text-gray-700 text-lg">{exam.level}</p>
                {exam.details && <p className="text-gray-700 whitespace-pre-line text-lg">{exam.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingExaminations;
