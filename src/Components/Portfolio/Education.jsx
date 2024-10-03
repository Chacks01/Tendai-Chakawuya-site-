import React from "react";

const Education = () => {
  const educationData = [
    {
      institution: "Uncommon",
      certificate: "Certificate Of Software Engeneering",
      role: "Student",
      date: "Jan 2024 - Dec 20204",
      description:
        "Demonstrated expertise in designing, developing, and testing software systems using industry-standard methodologies and tools, with a strong foundation in programming languages, data structures, and software engineering principles.",
    },
    {
      institution: "AWS",
      certificate: "Certificate Of Cloud Computing",
      role: "Student",
      date: "Jan 2025 - Dec 2025",
      description:
        "Developed comprehensive knowledge of cloud infrastructure, migration, and management, with expertise in deploying and managing cloud-based systems and applications.",
    },
    {
      institution: "edX",
      certificate: "Certificate Of Cyber Security",
      role: "Student",
      date: "Jan 2025 - Dec 2025",
      description:
        "Gained expertise in protecting computer systems, networks, and data from cyber threats, with knowledge of security fundamentals, risk management, vulnerability assessment, penetration testing, and incident response.",
    },
  ];

  return (
    <div className="bar w-[95%] h-[100vh] ">
      <div className=" mx-auto py-10 items-centre">
        <h2 className=" heading  font-bold text-center mb-4">Education</h2>
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
