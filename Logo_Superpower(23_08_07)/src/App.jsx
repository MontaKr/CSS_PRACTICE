import React, { useEffect, useRef } from "react";
import { GlobalStyle, Wrap } from "./styles";
import apple1 from "./apple1.png";
import apple2 from "./apple2.png";
import apple3 from "./apple3.png";
import apple4 from "./apple4.png";
import apple5 from "./apple5.png";

const App = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const images = logo.querySelectorAll("img");

    const getActive = () => document.body.dataset.active === "true";
    const setActiveTo = (active) => {
      document.body.dataset.active = active;
    };

    const shift = (image, index, rangeX, rangeY) => {
      const active = getActive();

      const translationIntensity = active ? 24 : 4,
        maxTranslation = translationIntensity * (index + 1),
        currentTranslationX = `${maxTranslation * rangeX}%`,
        currentTranslationY = `${maxTranslation * rangeY}%`;

      const scale = active ? 1 + index * 0.4 : 1;

      image.animate(
        {
          transform: `translate(${currentTranslationX}, ${currentTranslationY}) scale(${scale})`,
        },
        {
          duration: 750,
          fill: "forwards",
          easing: "ease",
        }
      );
    };

    const shiftAll = (images, rangeX, rangeY) => {
      images.forEach((image, index) => {
        shift(image, index, rangeX, rangeY);
      });
    };

    const shiftLogo = (e) => {
      const rect = logo.getBoundingClientRect(),
        radius = 1000;

      const centerX = rect.left + rect.width / 2,
        centerY = rect.top + rect.height / 2;

      const rangeX = (e.clientX - centerX) / radius,
        rangeY = (e.clientY - centerY) / radius;

      shiftAll(images, rangeX, rangeY);
    };

    const resetLogo = () => {
      setActiveTo(false);
      shiftAll(images, 0.4, -0.7);
    };

    window.addEventListener("mousemove", shiftLogo);
    window.addEventListener("mousedown", (e) => {
      setActiveTo(true);
      shiftLogo(e);
    });
    window.addEventListener("mouseup", resetLogo);

    const handleMouseLeave = () => {
      if (!getActive()) {
        resetLogo();
      }
    };

    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", shiftLogo);
      window.removeEventListener("mousedown", shiftLogo);
      window.removeEventListener("mouseup", resetLogo);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap ref={logoRef} id="logo">
        <img src={apple1} alt="Apple 1" />
        <img src={apple2} alt="Apple 2" />
        <img src={apple3} alt="Apple 3" />
        <img src={apple4} alt="Apple 4" />
        <img src={apple5} alt="Apple 5" />
      </Wrap>
    </>
  );
};

export default App;
