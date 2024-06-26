import React from 'react';

const statisticsData = [
  { title: "Lorem ipsum", number: "123+", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat" },
  { title: "Lorem ipsum", number: "12+", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat" },
  { title: "Lorem ipsum", number: "12+", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat" },
  { title: "Lorem ipsum", number: "123", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut" },
];

const Statistics = () => {
  return (
    <div className="bg-[#F6F6F6] py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 text-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statisticsData.map((stat, index) => (
            <div key={index} className="text-center md:text-left pr-8">
              <h3 className="text-xl font- text-[#12406F]">{stat.title}</h3>
              <p className="text-7xl font-medium text-[#12406F] mt-2">{stat.number}</p>
              <p className="text-xl font-medium text-[#12406F] mt-1" >{stat.title}</p>
              <p className="text-[#21466b] mt-2 text-base font-light">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
