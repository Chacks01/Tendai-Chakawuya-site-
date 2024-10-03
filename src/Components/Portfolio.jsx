import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2 className="heading">My Services</h2>
        <span>what i will do for you</span>
      </div>
      <div className="fillter-buttons">
        <button className="button mixitup-control-active" data-filter="all">
          All Work
        </button>
        <button className="button" data-filter=".web">
          Web Development
        </button>
        <button className="button" data-filter=".uiux">
          UI/UX Design
        </button>
        <button className="button" data-filter=".branding">
          Branding Design
        </button>
      </div>
      <div className="portfolio-gallery">
        <div className="portfolio-box mix uiux">
          <div className="portfolio-content">
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.Asperiores, soluta.
            </p>
            <a href="#" className="readMore">
              Explore More
            </a>
          </div>
          <div className="portfolio-img">
            <img src="img/portfolio/1.jpg" alt="" />
          </div>
        </div>
        {/* ... */}
      </div>
    </section>
  );
}

export default Portfolio;


