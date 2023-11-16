import React, { useEffect, useState } from "react";
import { GlobalStyle, Wrap } from "./styles";

const App = () => {
  const [percentage, setPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap isComplete={isComplete}>
        <div className="aqua" style={{ opacity: isComplete ? 0 : 1 }}>
          <span className="percentBar" style={{ width: `${percentage}%` }}>
            <h3 className="number">{percentage}%</h3>
          </span>
        </div>
        <h2
          style={{
            opacity: isComplete ? 1 : 0,
            visibility: isComplete ? "visible" : "hidden",
          }}
        >
          Welcome
        </h2>
      </Wrap>
    </>
  );
};

export default App;
