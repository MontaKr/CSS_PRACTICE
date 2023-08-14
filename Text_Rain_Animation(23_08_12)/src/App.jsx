import React, { useEffect, useState } from "react";
import { GlobalStyle, Wrap, Text } from "./styles";

const App = () => {
  const [rainTexts, setRainTexts] = useState([]);

  const randomText = () => {
    const text = "abcdefghijklmnopqrstuvwxyz0123456789";
    return text[Math.floor(Math.random() * text.length)];
  };

  useEffect(() => {
    const rain = () => {
      const id = Date.now();
      const left = Math.floor(Math.random() * 310);
      const size = Math.random() * 1.5;
      const duration = 1 + Math.random();

      const newRainText = {
        id,
        letter: randomText(),
        left,
        size,
        duration,
      };

      setRainTexts((prevTexts) => [...prevTexts, newRainText]);

      setTimeout(() => {
        setRainTexts((prevTexts) => prevTexts.filter((text) => text.id !== id));
      }, 2000);
    };

    const rainInterval = setInterval(rain, 200);

    return () => clearInterval(rainInterval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="container">
          <div className="cloud">
            {rainTexts.map((text) => (
              <Text
                key={text.id}
                left={text.left}
                size={text.size}
                duration={text.duration}
              >
                {text.letter}
              </Text>
            ))}
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default App;
