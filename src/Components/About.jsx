import { Link } from "react-router-dom";

function About() {
  return (
    <section
      className="about bg-black text-white py-16 px-8 lg:px-16"
      id="about"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Content Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">About me</h2>
          <p className="text-lg lg:text-xl leading-relaxed mb-6">
            I'm Tendai Chakawuya, a passionate entrepreneur, software developer,
            and business owner who believes in harnessing the power of
            technology to drive positive change in the world. With a passion for
            innovation and a drive to make a difference, I'm dedicated to
            creating solutions that impact lives and shape the future. When I'm
            not coding or building businesses, you can find me in the fields,
            exploring my passion for agriculture and sustainable living. I
            believe in the importance of feeding our communities and promoting
            eco-friendly practices. As a car enthusiast, I also enjoy the thrill
            of the open road and the beauty of well-designed machines.
          </p>
          <Link to="/about" className="text-blue-400 underline">
            Learn More
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
          {/* First Image */}
          <div className="w-40 lg:w-64 h-auto rounded-lg shadow-lg transform rotate-3 absolute top-0 left-5">
            <img
              src="/Frontend/img/0d795ae1a97258f586ac131643e7297b-removebg-preview.png"
              alt="Person"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Second Image */}
          <div className="w-40 lg:w-64 h-auto rounded-lg shadow-lg transform -rotate-3 absolute top-12 left-20">
            <img
              src="/Frontend/img/0d795ae1a97258f586ac131643e7297b-removebg-preview.png"
              alt="Person"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
