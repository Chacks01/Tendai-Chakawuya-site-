import React from 'react';

function Hero() {
  return (
    <section className="home" id="home">
      <div className="hero-info">
        <h3>Welcome To my World</h3>
        <h1>Hi I'm Tendai</h1>
        <div className="text-animate">
          <h2>Software Engineer</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          rerum cupiditate delectus ullam voluptates accusamus sapiente minima
          deleniti cum amet.
        </p>
        <div className="btn-box">
          <a href="chakawuyat1@gmail.com" className="btn">
            Hire Me Now ! <i className="bx bx-right-arrow-alt"></i>
          </a>
          <a href="img/resume.pdf" target="_blank" className="btn d-CV">
            Download CV <i className="bx bx-download"></i>
          </a>
        </div>
        <div className="social-media">
          <div className="bg-icon">
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <span></span>
          </div>
          <div className="bg-icon">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <span></span>
          </div>
        </div>
      </div>
      <div className="img-hero">
        <img
          src="/img/0d795ae1a97258f586ac131643e7297b-removebg-preview.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default Hero;

