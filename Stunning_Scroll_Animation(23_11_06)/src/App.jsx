import React, { useState, useEffect } from "react";
import { GlobalStyle, Wrap } from "./styles";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const App = () => {
  const [images, setImages] = useState([]);

  // importing images
  useEffect(() => {
    const load_image = async () => {
      const load_image = [];
      for (let i = 1; i <= 33; i++) {
        load_image.push((await import(`./images/${i}.jpg`)).default);
      }
      setImages(load_image);
    };

    load_image();
  }, []);

  console.log(images);

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
