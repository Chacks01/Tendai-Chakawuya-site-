import React from "react";

const Services = () => {
  const services = [
    {
      icon: "bx bx-code-alt bx-tada",
      title: "Web Development",
      description: "Blog, E-Commerce, Personal",
    },
    {
      icon: "bx bx-pencil bx-tada",
      title: "UI/UX Design",
      description: "Mobile App, Website Design",
    },
    {
      icon: "bx bx-window-alt bx-tada",
      title: "Web App Development",
      description: "Systems, Web Apps",
    },
    {
      icon: "bx bxs-virus-block bx-tada",
      title: "Cyber Security",
      description: "Network Security, Data Security",
    },
    {
      icon: "bx bx-cloud bx-tada",
      title: "Cloud Computing",
      description: "Servers, Storage, Databases",
    },
  ];

  return (
    <div className="bar">
      <div className=" flex flex-col items-center justify-center w-[70%]  h-screen mx-auto py-10">
        <h2 className=" heading  mb-4">My Services</h2>
        <p className="text-center text-gray-500 mb-10">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
          Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg flex flex-col items-center justify-center bg-white hover:shadow-lg transition-shadow"
            >
              <i
                className={`${service.icon} text-5xl text-gray-900 mb-4`}
              ></i>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-center text-gray-600">{service.description}</p>
              {service.cta && (
                <a href="#" className="mt-4 text-yellow-500 hover:underline">
                  {service.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
