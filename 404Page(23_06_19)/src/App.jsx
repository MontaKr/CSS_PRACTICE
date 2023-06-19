import React from "react";
import styled, { keyframes } from "styled-components";
import plane from "./assets/plane.png";
import grass from "./assets/grass.png";

const App = () => {
  return (
    <Wrap>
      <div className="error">
        <div className="sky">
          <h2>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h2>
          <div className="grass"></div>
          <img src={plane} className="plane" />
        </div>
        <div className="field">
          <h2>Oops... looks like you got lost.</h2>
          <a href="#">Go Home</a>
        </div>
      </div>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;

  .error {
    min-height: 100vh;
    background: linear-gradient(0deg, #fff, #03a9f4);
  }

  .sky {
    position: relative;
    widows: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 16em;
      color: #fff;
      text-shadow: 15px 15px 0 rgba(0, 0, 0, 0.1);

      span {
        display: inline-block;
        animation: animate 2s ease-in-out infinite;

        &:nth-child(even) {
          animation-delay: -1s;
        }
      }
    }
  }

  .field {
    padding: 100px;
    height: 40vh;
    background: #6e2308;
    box-shadow: inset 0 20px 10px #51680c;
    text-align: center;

    h2 {
      color: #fff;
      font-size: 2em;
      margin-bottom: 20px;
    }

    a {
      background: #fff;
      color: #000;
      width: 160px;
      height: 50px;
      line-height: 50px;
      border-radius: 50px;
      display: inline-block;
      text-decoration: none;
      font-size: 20px;
    }
  }

  .plane {
    position: absolute;
    bottom: 150px;
    left: 200px;
    max-width: 300px;
  }

  .grass {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20px;
    background: url(${grass});
    background-position: bottom;
    animation: animateGrass 0.2s linear infinite;
  }

  @keyframes animate {
    0%,
    100% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(50px);
    }
  }

  @keyframes animateGrass {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: -94px 0;
    }
  }
`;
