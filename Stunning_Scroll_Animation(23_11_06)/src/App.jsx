import React, { useState, useEffect } from "react";
import { GlobalStyle, Wrap } from "./styles";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const App = () => {
  const [images, setImages] = useState([]);

  gsap.registerPlugin(ScrollTrigger);

  // dynamic importing
  useEffect(() => {
    const importImages = async () => {
      const images = [];
      for (let i = 1; i <= 33; i++) {
        const promise = new Promise((resolve, reject) => {
          import(`./images/${i}.jpg`)
            .then((module) => {
              console.log(`Loaded image ${i}`);
              resolve(module.default);
            })
            .catch((error) => {
              console.error(`Error loading image ${i}:`, error);
              reject(error);
            });
        });

        const image = await promise;
        images.push(image);
        console.log(`Current loaded images:`, images);
      }
      setImages(images);
    };

    importImages();
  }, []);

  //GSAP
  useEffect(() => {
    if (images.length > 0) {
      console.log(`Starting GSAP animation with images`, images);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: 2,
          start: "top top",
          end: "50%+=500px",
        },
      });

      tl.to(".items img", { scale: 1 }, 0)
        .to(".items", { scale: 2, rotate: 0 }, 0)
        .to(".overlay", { height: "100%" }, 0.2)
        .to(".overlay h1", { scale: 1 }, 0.6)
        .to(".items", { scale: 0.8, opacity: 0.2 }, 0.6);
    }
  }, [images]);

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="wrapper">
          <div className="items">
            {images.map((src, index) => (
              <div key={index} className="item">
                <img src={src} alt={`Gallery item ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="overlay">
            <h1>AWESOME</h1>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default App;
