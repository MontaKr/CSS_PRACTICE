import React, { useEffect, useState } from "react";
import { GlobalStyle, Wrap, Text } from "./styles";

const App = () => {
  const [rainTexts, setRainTexts] = useState([]);

  const randomText = () => {
    let text = "abcdefghijklmnopqrstuvwxyz0123456789";
    const letter = text[Math.floor(Math.random() * text.length)];
    return letter;
  };

  useEffect(() => {
    const rain = () => {
      //instance
      let id = Date.now();
      let left = Math.floor(Math.random() * 310);
      let size = Math.random() * 1.5;
      let duration = 1 + Math.random();

      const newRainText = {
        id,
        letter: randomText(),
        left,
        size,
        duration,
      };

      //add newRainTexts to rainTexts
      setRainTexts((prevTexts) => [...prevTexts, newRainText]);

      //get rid of texts every 2000ms
      setTimeout(() => {
        setRainTexts((prevTexts) => prevTexts.filter((text) => text.id !== id));
      }, 2000);
    };

    //create rain function every 100ms
    const rainInterval = setInterval(rain, 100);

    //useEffect Cleaner
    return () => {
      clearInterval(rainInterval);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="container">
          <div className="cloud">
            {rainTexts.map((rainVal) => (
              <Text
                key={rainVal.id}
                left={rainVal.left}
                size={rainVal.size}
                duration={rainVal.duration}
              >
                {rainVal.letter}
              </Text>
            ))}
          </div>
        </div>
        <Text></Text>
      </Wrap>
    </>
  );
};

export default App;
