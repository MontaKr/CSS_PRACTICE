import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font1: sans-serif;
    --font2: cursive;
    --white: #fff;
    --black: #000;
    --primary-light: #f9fafb;
    --second-light: #f0f0f0;
    --third-light: #dadbdb;
    --primary-dark: #22212c;
    --second-grey: #3f3434;
    --first-shadow: rgba(0, 0, 0, 0.1);
    --success: rgba(61, 168, 102, 0.6);
    --error: rgba(168, 30, 14, 0.6);
    --primary-color: #5c5fc4;
    --second-color: #c4c15c;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font1);
  }

  select:focus, input:focus , button:focus {
    outline: none;
  }

  body {
    background-color: var(--primary-dark);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    transform-style: preserve-3d;
    animation: animate 7s ease-in-out infinite alternate;
  }
`;

export const Container = styled.span`
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5) 90%,
    transparent
  );
  text-transform: uppercase;
  line-height: 0.76em;
  position: absolute;
  color: var(--white);
  font-size: 3.5em;
  white-space: nowrap;
  font-weight: bold;
  padding: 0px 10px;
  transform-style: preserve-3d;
  text-shadow: 0 10px 15px var(--first-shadow);
  transform: translate(-50%, -50%)
    rotateX(calc(${(props) => props.i * 22.5}deg)) translateZ(109px);

  i {
    font-style: initial;

    &:nth-child(1) {
      color: var(--primary-color);
    }

    &:nth-child(2) {
      color: var(--second-color);
    }
  }

  @keyframes animate {
    0% {
      transform: perspective(500px) rotateX(0deg) rotate(5deg);
    }

    100% {
      transform: perspective(50px) rotateX(360deg) rotate(5deg);
    }
  }
`;
