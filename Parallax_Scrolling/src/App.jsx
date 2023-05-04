import { useEffect, useState } from "react";
import styled from "styled-components";

export default function App() {
  const [topNum, setTopNum] = useState();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setTopNum(window.scrollY);
  };

  return (
    <Wrap topNum={topNum}>
      <section>
        <img src="bg.jpg" id="bg" />
        <img src="moon.png" id="moon" />
        <img src="mountain.png" id="mountain" />
        <img src="road.png" id="road" />
        <h2 id="text">Moon Light</h2>
      </section>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  background: #0a2a43;
  min-height: 1500px;

  section {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #0a2a43, transparent);
    z-index: 10000;
  }

  section::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a2a43;
    z-index: 10000;
    mix-blend-mode: color;
  }

  section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  #text {
    position: relative;
    color: #fff;
    font-size: 10em;
    z-index: 1;
  }

  #bg {
    top: ${(props) => `${props.topNum}` * 0.5 + "px"};
  }

  #moon {
    left: ${(props) => -`${props.topNum}` * 0.5 + "px"};
  }

  #mountain {
    top: ${(props) => -`${props.topNum}` * 0.15 + "px"};
  }

  #road {
    z-index: 2;
    top: ${(props) => `${props.topNum}` * 0.15 + "px"};
  }

  #text {
    top: ${(props) => `${props.topNum}` * 1 + "px"};
  }
`;
