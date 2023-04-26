import styled from "styled-components";
import { useState } from "react";

export default function App() {
  const [valueX, setValueX] = useState(0);

  const mouseHandle = (e) => {
    setValueX(e.clientX);
  };

  return (
    <Wrap onMouseMove={mouseHandle} valueX={valueX}>
      <section>
        <div id="bg"></div>
        <h2>2.5D Parallax Effects</h2>
        <img src="img.png" className="girl" />
      </section>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;

  section {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  section #bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(bg.jpg);
    background-size: ${(props) => `calc(100% + ${props.valueX / 2}px)`};
    background-position: center;
  }

  section .girl {
    position: absolute;
    top: 0;
    width: 400px;
    left: 50%;
    max-width: ${(props) => `calc(400px - ${props.valueX / 50}px)`};
  }

  section h2 {
    position: absolute;
    top: 50%;
    width: 100%;
    color: #fff;
    font-size: 8em;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transform: ${(props) =>
      `translate(calc(10% - ${props.valueX * 2}px), -50%)`};
  }
`;
