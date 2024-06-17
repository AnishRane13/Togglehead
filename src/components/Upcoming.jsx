import React from 'react';
import CalendarIcon from '../assets/Calendar.svg'; // Adjust the path as needed

const UpcomingExaminations = () => {
  const exams = [
    { date: "02th October 2014", level: "Level 1 exam", details: "" },
    { date: "Nov-Dec 2016", level: "Level 2", details: "Lorem Ipsum\nLorem Ipsum" },
    { date: "Ongoing this year", level: "Level 3 (Grad)", details: "" }
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 text-xs leading-normal bg-white mt-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-blue-800 text-left">Upcoming</h2>
          <h2 className="text-2xl font-semibold text-blue-800 text-left">Examinations</h2>
          <p className="text-gray-500 mt-2 text-left">Enquire about the examination & register for the exams</p>
        </div>
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <div key={index} className="flex items-start text-left">
              <img src={CalendarIcon} alt="Calendar" className="w-8 h-8 text-blue-800 mr-4 mt-2" />
              <div>
                <p className="text-blue-800 font-semibold text-sm">{exam.date}</p>
                <p className="text-gray-500 text-xs">{exam.level}</p>
                {exam.details && <p className="text-gray-500 whitespace-pre-line text-xs">{exam.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingExaminations;
