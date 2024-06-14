import React from 'react';

const UpcomingExaminations = () => {
  const exams = [
    { date: "02th October 2014", level: "Level 1 exam", details: "" },
    { date: "Nov-Dec 2016", level: "Level 2", details: "Lorem Ipsum\nLorem Ipsum" },
    { date: "Ongoing this year", level: "Level 3 (Grad)", details: "" }
  ];

  return (
    <div className="bg-white p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-blue-800">Upcoming Examinations</h2>
          <p className="text-gray-500 mt-2">Enquire about the examination & register for the exams</p>
        </div>
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {exams.map((exam, index) => (
            <div key={index} className="flex items-start">
              <i className="fa-light fa-calendar-clock text-4xl text-blue-800 mr-4"></i>
              <div>
                <p className="text-blue-800 font-semibold">{exam.date}</p>
                <p className="text-gray-500">{exam.level}</p>
                {exam.details && <p className="text-gray-500 whitespace-pre-line">{exam.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingExaminations;
