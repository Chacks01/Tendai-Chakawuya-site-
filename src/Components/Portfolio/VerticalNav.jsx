import React, { useState } from "react";

const VerticalNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className=" overflow-hidden fixed top-0 right-0 h-screen p-4 w-[5%] bg-white  flex flex-col items-center justify-between z-50">
      <div className="">
        <img className="h-[3rem]" src="/src/assets/img/home/Tendai Chakawuya logo1.png" alt="" />
      </div>
      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden flex items-center justify-center mt-4">
        <button
          onClick={toggleMenu}
          className="text-black p-2 rounded-full focus:outline-none"
        >
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col items-center justify-between space-y-6 mt-6`}
      >
        {/* Menu Items */}
        <div className="flex flex-col space-y-6">
          {/* Boxicons */}
          {[
            { icon: "bx bxs-home bx-tad", label: "Photos" },
            { icon: "bx bxs-graduation bx-a" },
            { icon: "bx bxs-shield-alt-2 bada"},
            { icon: "bx bxs-briefcase bx-t", },
            { icon: "bx bxs-image-add bx-t" },
            { icon: "bx bxs-briefcase bx-t" },
            { icon: "bx bxs-briefcase bx-t" },
            { icon: "bx bxs-briefcase bx-t" },
          ].map((item, index) => (
            <div key={index} className="group flex ml-[7rem] items-center ">
              <div className="p-2 rounded-full group-hover:text-white">
                <i className={`${item.icon} text-gray-900 text-[2rem]`}></i>
              </div>
              <span className="ml- opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default VerticalNav;
