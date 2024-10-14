import React, { useEffect, useRef, useState } from "react";

const MainPictures = () => {
  const scrollRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  const handleMouseDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleMouseUp = () => {
    setMouseDownAt(0);
    if (scrollRef.current) {
      setPrevPercentage(parseFloat(scrollRef.current.dataset.percentage) || 0);
    }
  };

  const handleMouseMove = (e) => {
    if (mouseDownAt === 0 || !scrollRef.current) return;
    const mouseDelta = mouseDownAt - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage = prevPercentage + percentage;
    scrollRef.current.dataset.percentage = nextPercentage;

    scrollRef.current.style.transform = `translate(${nextPercentage}%, -20%)`;

    for (const image of scrollRef.current.getElementsByClassName("image")) {
      image.style.objectPosition = `${nextPercentage + 100}% center`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseDownAt, prevPercentage]);

  const imageStyle = {
    width: "250px",
    height: "auto",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  return (
    <section
      id="track"
      data-percentage="0"
      className="companies"
      style={{ overflow: "hidden", whiteSpace: "nowrap", cursor: "grab" }}
      ref={scrollRef}
    >
      <div className="text">
        <h1>Picture Gallery</h1>
      </div>
      <div className="image-track">
        {[
          "rowing pic 1.jpg",
          "rowing pic 3.jpg",
          "rowing pic 4.jpg",
          "rowing pic 5.jpg",
          "rowing pic 6.jpg",
          "rowing pic 7.jpg",
          "rowing pic 2.jpg",
        ].map((img, index) => (
          <img
            key={index}
            src={`/img/home/${img}`}
            alt=""
            draggable="false"
            className="image"
            style={imageStyle}
          />
        ))}
      </div>
    </section>
  );
};

export default MainPictures;
