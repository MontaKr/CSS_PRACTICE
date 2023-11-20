import React, { useEffect, useState } from "react";
import { GlobalStyle, Wrap } from "./styles";

const App = () => {
  const [percent, setPercent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          return 100;
        }
        return ++prev;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap isLoaded={isLoaded}>
        <div className="aqua" style={{ opacity: isLoaded ? 0 : 1 }}>
          <span className="percentBar" style={{ width: `${percent}%` }}>
            <h3 className="number">{percent}%</h3>
          </span>
        </div>
        <h2
          style={{
            opacity: isLoaded ? 1 : 0,
            visibility: isLoaded ? "visible" : "hidden",
          }}
        >
          Welcome
        </h2>
      </Wrap>
    </>
  );
};

export default App;
