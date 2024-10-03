import React from 'react'
// import ContactBG from '../assets/img//home/banner 2.jpg'
// const Background = (props) =>{
// const styles = {
//   backroundimage: 'ContactBG'
// };

function MainContact() {
  return (
    <section className="contact" id="contact">
      <div className="contactSkills">
        <div className="contact-info">
          <div className="main-text">
            <h2 className="heading">Contact Me</h2>
          </div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              name="#"
              id=""
              cols="30"
              placeholder="Your Message"
              rows="10"
            ></textarea>
            <div className="formBtn">
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="links">
        <a target="blank" href="https://www.instagram.com/_____chacks_____/">
          <i class="bx bxl-instagram bx-fade-down"></i>
        </a>
        <a target="blank" href="https://www.tiktok.com/@___chacks___">
          <i class="bx bxl-tiktok bx-fade-up"></i>
        </a>
        <a
          target="blank"
          href="https://www.youtube.com/channel/UCp9bFleBzAjOhXbpBTs_dnA"
        >
          <i class="bx bxl-youtube bx-fade-down"></i>
        </a>
      </div>
    </section>
  );
}

export default MainContact