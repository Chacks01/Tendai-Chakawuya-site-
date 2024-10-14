import React from "react";

function Services() {
  return (
    <section className="services container" id="services">
      <div className="main-text">
        <h2 className="heading">My Services</h2>
        <span>what i will do for you</span>
      </div>
      <div className="allServices">
        <div className="servicesItem">
          <div className="icon-services">
            <i className="bx bx-layer"></i>
            <span></span>
          </div>
          <h3>App Development</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            inventore ea nemo ab recusandae modi voluptates maxime ipsam
            eveniet. Facilis.
          </p>
          <a href="#" className="readMore">
            Read More
          </a>
        </div>
        {/* ... */}
      </div>
    </section>
  );
}

export default Services;
