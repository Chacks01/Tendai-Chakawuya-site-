import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <Link to='/about'>About</Link>
      <div className="about-img">
        <img
          src="/Frontend/img/0d795ae1a97258f586ac131643e7297b-removebg-preview.png"
          alt=""
          className="aboutHero"
        />
      </div>
      <div className="about-content">
        <h2 className="heading">About Me</h2>
        <h3>1 Year's Experience in web Development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          voluptatem autem ex in. Temporibus et maiores ipsum recusandae
          voluptas consequatur!
        </p>
        <div className="about-btn">
          <button className="active">Main Skills</button>
          <button>Awards</button>
          <button>Education</button>
        </div>
        {/* ... */}
      </div>
    </section>
  );
}

export default About;
