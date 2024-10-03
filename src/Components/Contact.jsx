import React from "react";

function Contact() {
  return (
    <section className="down-box" id="contact">
      <div className="contactSkills">
        <div className="contact-info">
          <div className="main-text">
            <h2 className="heading">Contact Me</h2>
            <span>get in touch with me</span>
          </div>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea name="#" id="" cols="30" rows="10"></textarea>
            <div className="formBtn">
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="skills">{/* ... */}</div>
      </div>
    </section>
  );
}
export default Contact;
