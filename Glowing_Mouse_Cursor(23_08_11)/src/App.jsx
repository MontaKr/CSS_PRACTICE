import React, { useEffect, useRef } from "react";
import { GlobalStyle } from "./styles";

const App = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.backgroundPositionX = e.pageX / -4 + "px";
      document.body.style.backgroundPositionY = e.pageY / -4 + "px";
      cursorRef.current.style.left = e.pageX + "px";
      cursorRef.current.style.top = e.pageY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <div>
        <div id="cursor" ref={cursorRef} />
      </div>
    </>
  );
};

export default App;
