import React, { useState } from "react";
import { GlobalStyle, Wrap } from "./styles";

const App = () => {
  const slides = [
    { text: "Colors" },
    { text: "Forest" },
    { text: "Eclipse" },
    { text: "Peace" },
    { text: "Splash" },
  ];

  const [activeSlides, setActiveSlides] = useState({
    current: 1,
    previous: slides.length,
    next: 2,
  });

  const updateActiveSlide = (index) => {
    setActiveSlides({
      current: index,
      previous: index === 1 ? slides.length : index - 1,
      next: index === slides.length ? 1 : index + 1,
    });
  };

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${
                activeSlides.current === index + 1
                  ? "active"
                  : activeSlides.previous === index + 1
                  ? "previous"
                  : activeSlides.next === index + 1
                  ? "next"
                  : ""
              }`}
              onClick={() => updateActiveSlide(index + 1)}
            >
              <img src={`./asset/${index + 1}.png`} alt={`${slide.text}`} />
            </div>
          ))}
        </div>
        <div className="textarea">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`text ${
                activeSlides.current === index + 1 ? "active" : ""
              }`}
            >
              <h2>{slide.text}</h2>
            </div>
          ))}
        </div>
      </Wrap>
    </>
  );
};

export default App;
