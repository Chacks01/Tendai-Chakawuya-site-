import React from "react";

const Education = () => {
  const educationData = [
    {
      institution: "Greater Heights",
      certificate: "UI/UX Web Developer",
      role: "Student",
      date: "Jan 2024 - Dec 2024",
      description:
        "",
    },
    {
      institution: "M&M ",
      certificate: "UI/UX Web Developer",
      role: "Student",
      date: "Sept 2024 - Dec 2024",
      description:
        ""
    },
  ];

  return (
    <div className=" bar w-[95%] h-[100vh] ">
      <div className="containe mx-auto py-10 items-centre">
        <h2 className=" font-bold text-center mb-4">Work</h2>
        <p className="text-center  mb-10 text-gray-500">
          From Curiosity to Passion: Discovered my interest in computer science
          and technology, and began exploring the possibilities.
          <br />
        </p>
        <div className="space-y-6 flex flex-col items-center justify-center">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-white w-[82%] shadow-lg p-6   rounded-lg"
            >
              <div className="flex justify-between">
                <div className="">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.institution}
                    </h3>
                    <div className="flex gap-3">
                      <p className="text-lg text-gray-500">{item.role}</p>
                      <p className="bg-gray-900 text-sm text-white px-2 py-1 rounded">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" w-1/2  ">
                  <p className="font-bold ">{item.certificate}</p>
                  <p className="text-gray-700 w-[80%] ">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
