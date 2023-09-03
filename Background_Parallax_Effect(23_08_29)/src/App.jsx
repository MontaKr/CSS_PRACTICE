import React from "react";
import { GlobalStyle, Wrap, Img } from "./styles";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import img7 from "./7.png";
import img8 from "./8.png";
import img9 from "./9.png";
import img10 from "./10.png";
import img11 from "./11.png";
import img12 from "./12.png";

const App = () => {
  const imgArray = [
    { src: img1, speed: "-5" },
    { src: img2, speed: "5" },
    { src: img3, speed: "2" },
    { src: img4, speed: "6" },
    { src: img5, speed: "8" },
    { src: img6, speed: "-2" },
    { src: img7, speed: "4" },
    { src: img8, speed: "-9" },
    { src: img9, speed: "6" },
    { src: img10, speed: "-7" },
    { src: img11, speed: "-5" },
    { src: img12, speed: "5" },
  ];

  const parallax = (e) => {
    e.currentTarget.querySelectorAll(".layer").forEach((layer) => {
      const speed = layer.getAttribute("speed");

      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 100;

      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <section onMouseMove={parallax}>
          {imgArray.map((val, idx) => {
            return (
              <Img
                className="layer"
                speed={val.speed}
                src={val.src}
                key={idx}
              />
            );
          })}
          <h2 className="layer" speed="-2">
            Parallax
          </h2>
        </section>
      </Wrap>
    </>
  );
};

export default App;
