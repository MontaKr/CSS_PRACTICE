import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: #111;
    overflow: hidden;
  }
`;

export const Circle = styled.div`
  position: absolute;
  bottom: 0;
  aspect-ratio: 1/1;
  width: 20px;
  background: #0f0;
  box-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0, 0 0 50px #0f0;
  border-radius: 50%;
  animation: animate 5s linear forwards;

  &:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 25%;
    width: 50%;
    opacity: 0.5;
    height: 100vh;
    background: linear-gradient(#0f0, transparent);
  }

  @keyframes animate {
    0% {
      transform: translateY(0);
      opacity: 1;
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }
`;
