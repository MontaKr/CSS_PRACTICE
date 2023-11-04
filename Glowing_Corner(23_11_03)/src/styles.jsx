import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 100vh;
  background-color: #222;
`;

export const Loader = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background: rgba(45, 45, 45, 1);
  overflow: hidden;
  transform: rotate(calc(90deg * ${(props) => props.num}));

  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      ${(props) => props.color},
      transparent,
      transparent
    );
    animation: animate 1.5s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    background: rgba(45, 45, 45, 0.9);
  }

  @keyframes animate {
    0% {
      transform: translate(-150px, -150px);
    }

    25% {
      transform: translate(0px, -150px);
    }

    50% {
      transform: translate(0px, 0px);
    }

    75% {
      transform: translate(-150px, 0px);
    }

    100% {
      transform: translate(-150px, -150px);
    }
  }
`;
