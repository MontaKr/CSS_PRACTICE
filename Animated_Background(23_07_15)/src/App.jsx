import React, { useEffect, useState } from "react";
import { Circle, GlobalStyle } from "./styles";

const App = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const createCircle = () => {
      const sizeW = Math.random() * 12;
      const duration = Math.random() * 3;
      const style = {
        width: `${2 + sizeW}px`,
        left: `${Math.random() * window.innerWidth}px`,
        animationDuration: `${2 + duration}s`,
      };

      setCircles((prev) => [
        ...prev,
        {
          id: Date.now(),
          style,
          removeAt: Date.now() + 5000,
        },
      ]);
    };

    const intervalId = setInterval(createCircle, 200);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCircles((prev) =>
        prev.filter((circle) => Date.now() < circle.removeAt)
      );
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <GlobalStyle />
      <div>
        {circles.map((circle) => (
          <Circle key={circle.id} style={circle.style} />
        ))}
      </div>
    </>
  );
};

export default App;
