import React, { useEffect, useState } from "react";
import { Wrap, Line, GlobalStyle } from "./styles";
import Netflix from "./netflix.png";

const App = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const createLines = () => {
      const sizeW = Math.random() * 3;
      const style = {
        left: Math.random() * window.innerWidth + "px",
        width: 1 + sizeW + "px",
        background: "hsl(" + Math.floor(Math.random() * 60) + "deg,100%, 50%)",
      };

      setLines((prev) => [
        ...prev,
        {
          id: Date.now(),
          style,
          removeAt: Date.now() + 2000,
        },
      ]);
    };

    const intervalId = setInterval(() => {
      createLines();
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLines((lines) => lines.filter((line) => Date.now() < line.removeAt));
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <img src={Netflix} className="logo" />
        {lines.map((line) => {
          return <Line key={line.id} style={line.style} />;
        })}
      </Wrap>
    </>
  );
};

export default App;
