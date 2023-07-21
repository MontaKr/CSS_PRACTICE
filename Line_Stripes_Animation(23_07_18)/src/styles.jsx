import styled, { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background: #111;
    overflow: hidden;
  }
`;

export const Wrap = styled.div`
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 60vw;
  }
`;

export const Line = styled.div`
  position: absolute;
  height: 100vh;
  background: #ea0914;
  z-index: 1000;
  mix-blend-mode: color-dodge;
  width: 50px;
  animation: animate 2s linear infinite;

  @keyframes animate {
    0%,
    100% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
  }
`;
