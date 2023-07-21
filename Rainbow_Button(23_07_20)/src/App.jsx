import React from "react";
import { GlobalStyle, Wrap } from "./styles";

const App = () => {
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    document.documentElement.style.setProperty("--gradient-pos-x", `${x}%`);
    document.documentElement.style.setProperty("--gradient-pos-y", `${y}%`);
  };

  const handleMouseOut = () => {
    document.documentElement.style.setProperty("--gradient-pos-x", `50%`);
    document.documentElement.style.setProperty("--gradient-pos-y", `50%`);
  };

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <button
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseOut}
          className="button"
        >
          <div className="neon">
            <div className="gradient"></div>
          </div>
          <div className="border">
            <div className="gradient"></div>
          </div>
          <div className="content">Let's Start</div>
        </button>
      </Wrap>
    </>
  );
};

export default App;
