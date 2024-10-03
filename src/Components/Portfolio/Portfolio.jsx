import React from "react";

const Portfolio = () => {
  return (
    <div className="bar w-[95%] ">
      <div className="h-full flex flex-col gap-4 ">
        <h2 className="text-center font-bold ">Portfolio</h2>
        <div className="text-center text-gray-500">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Alliqua Dolor Do Amet
          Sint. Velit Officia Consequat Duis Enim Vellt Mollit. Lorem Ipsum
        </div>
        <div className="flex justify-center items-center gap-4 mt-4">
          <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            All Categories
          </button>
          <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            UI Design
          </button>
          <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Web Templates
          </button>
          <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logo
          </button>
          <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Branding
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4   container ">
          <div className=" firstpic h-[25rem] ">
            
          </div>
          <div className="firstpic h-[25rem] flex ">
            
          </div>
          <div className="firstpic h-[25rem]">
            
          </div>
          <div className="firstpic h-[25rem]">
           
          </div>
          <div className="firstpic h-[25rem]">
            
          </div>
          <div className="firstpic h-[25rem]">
            
          </div>
          <div className="firstpic h-[25rem]">
            
          </div>
          <div className="firstpic h-[25rem]">
            
          </div>
          <div className="firstpic h-[25rem]">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
