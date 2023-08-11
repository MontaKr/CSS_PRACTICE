import React, { useEffect, useState } from "react";
import { GlobalStyle, Wrap } from "./styles";

const App = () => {
  const [labelChars, setLabelChars] = useState([]);

  useEffect(() => {
    const labelText = "Wavy Input Text Animation";
    setLabelChars([...labelText]);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="inputBox">
          <input type="text" required />
          <label>
            {labelChars.map((char, i) => (
              <span
                key={i}
                style={{
                  transitionDelay: `${i * 30}ms`,
                  filter: `hue-rotate(${i * 10}deg)`,
                }}
              >
                {char}
              </span>
            ))}
          </label>
        </div>
      </Wrap>
    </>
  );
};

export default App;
