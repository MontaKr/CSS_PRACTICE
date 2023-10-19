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
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #0f0f0f;
      overflow: hidden;
    }
  `;

export const Card = styled.div`
  --i: ${(props) => props.i};

  position: absolute;
  width: 240px;
  height: 320px;
  border-radius: 8px;
  background: #5e5cfc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.2);
  font-size: 8em;
  font-weight: 700;
  border: 10px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.5s;
  transform-origin: 50% 100%;
  filter: hue-rotate(calc(var(--i) * 50deg));
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
`;

export const Wrap = styled.div`
  .container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover ${Card} {
      transform: rotate(calc(var(--i) * 5deg))
        translate(calc(var(--i) * 120px), -50px);
      color: rgba(0, 0, 0, 0.25);
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
    }

    &:active ${Card} {
      background: #333;
    }

    ${Card}:active {
      translate: calc(var(--i) * 20px) -50px;
      background: #5e5cfc;
      z-index: 100;
    }
  }
`;
