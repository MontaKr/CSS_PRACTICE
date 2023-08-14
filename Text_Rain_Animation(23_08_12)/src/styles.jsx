import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #181c1f;
  }
`;

export const Wrap = styled.div`
  .container {
    position: relative;
    width: 100vw;
    height: 400px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    -webkit-box-reflect: below 1px
      linear-gradient(transparent, transparent, transparent, transparent, #0005);

    .cloud {
      position: relative;
      top: 50px;
      width: 320px;
      height: 100px;
      background: #fff;
      border-radius: 100px;
      z-index: 100;
      filter: drop-shadow(0 0 35px #fff);

      &::before {
        content: "";
        position: absolute;
        top: -50px;
        left: 40px;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: #fff;
        box-shadow: 90px 0 0 30px #fff;
      }
    }
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 40px;
  height: 20px;
  line-height: 20px;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 15px #fff, 0 0 30px #fff;
  transform-origin: bottom;
  animation: animate 2s linear forwards;

  left: ${(props) => props.left + "px"};
  font-size: ${(props) => 0.5 + props.size + "em"};
  animation-duration: ${(props) => 1 + props.duration + "s"};

  @keyframes animate {
    0% {
      transform: translateY(0) scale(1);
    }

    70% {
      transform: translateY(290px) scale(1);
    }

    100% {
      transform: translateY(290px) scale(0);
    }
  }
`;
