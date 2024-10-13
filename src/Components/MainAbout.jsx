import Imaage from "../assets/img/home/about-pic-2.jpg";
import Image from "../assets/img/home/about-pic.jpg";


const MainAbout = () => {
  return (
    <section id="about" className="about-one container">
      <div className="row main-texts">
        <div className="flexs">
          <div className="col-md-8">
            <h2 className="heading">About me</h2>
            <p>
              I am Tendai Chakawuya, a passionate entrepreneur, software
              developer, and business owner who believes in harnessing the power
              of technology to drive positive change in the world. With a
              passion for innovation and a drive to make a difference, I am
              dedicated to creating solutions that impact lives and shape the
              future. When I am not coding or building businesses, you can find
              me in the fields, exploring my passion for agriculture and
              sustainable living. I believe in the importance of feeding our
              communities and promoting eco-friendly practices. As a car
              enthusiast, I also enjoy the thrill of the open road and the
              beauty of well-designed machines.
            </p>
          </div>
          <div className="col-md-4 img">
            <img src={Imaage} alt="img" className="imgs" />
            <img src={Image} alt="img" className="imgs-1" />
          </div>
        </div>
      </div>
      <div className="row main-texts">
        <div className="flexs">
          <div className="col-md-8">
            <h2 className="heading">Journey</h2>
            <p>
              I set out on a challenge to build a series companies, each one a
              stepping stone to greater success. From my first venture, a
              software development company, to my latest project, a car
              customizing commpany, each company has taught me valuable lessons
              and fueled my passion for innovation. Along the way, I've faced
              challenges, embraced failures, and celebrated triumphs. But most
              importantly, I've remained true to my vision of creating a
              business empire that makes a lasting impact. As I continue on this
              road to 21, I'm excited to explore new industries, push
              boundaries, and inspire others to join me on this entrepreneurial
              journey.
            </p>
          </div>
          <div className="col-md-4 img">
            <img src={Imaage} alt="img" className="imgs" />
            <img src={Image} alt="img" className="imgs-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainAbout;




