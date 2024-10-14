

const HeroSection = () => {
  return (
    <div className=" overflow-hidden bar w-[96%] h-screen flex flex-col content-center justify-center bg-whit p-8 items-center ">
      <div>
        <img
          src="/img/portfolio/Ellipse 1.png"
          alt="Tendai Chakawuya"
          className="h-[25rem]  "
        />
      </div>
      {/* Text Content */}
      <div className=" space-y-4 text-center">
        <h1 className="text-7xl font-bold text-gray-900">
          I am{" "}
          <span className="text-white text-7xl font-bold text">
            Tendai Chakawuya
          </span>{" "}
          <br />
          <span className="text-white text-4xl">Software Developer</span>
        </h1>

        <a href="mailto:chakawuyat1@gmail.com">
          {" "}
          <button className="bg-orange-500 w-[20%] text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-600 transition-colors">
            HIRE ME ➜
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
