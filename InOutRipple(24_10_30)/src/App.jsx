import { useEffect, useRef, useState } from "react";
import { GlobalStyle, Wrap } from "./styles";

function App() {
  const boxRef = useRef([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    boxRef.current.forEach((box, _) => {
      const handleEvent = (e) => handleMouseMove(e, box);

      box.addEventListener("mousemove", handleEvent);

      return () => {
        box.removeEventListener("mousemove", handleEvent);
      };
    });
  }, []);

  const handleMouseMove = (e, box) => {
    const x = e.pageX - box.offsetLeft;
    const y = e.pageY - box.offsetTop;
    setPosition({ x, y });
  };

  return (
    <>
      <GlobalStyle />
      <Wrap position={position}>
        <div className="container">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => (boxRef.current[index] = el)}
              className="box"
            ></div>
          ))}
        </div>
      </Wrap>
    </>
  );
}

export default App;
