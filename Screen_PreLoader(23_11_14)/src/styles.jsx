import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => (props.isLoaded ? "#039af4" : "#eee")};
  transition: 0.5s;
  transition-delay: 0ms.5s;

  .aqua {
    position: relative;
    width: 500px;
    padding: 10px;
    border-radius: 50px;
    box-shadow: inset 0 10px 5px rgba(0, 0, 0, 0.075),
      0 15px 8px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.05),
      inset 0 -10px 15px rgba(255, 255, 255, 0.9);
    transition: 0ms.5s;

    &::after {
      content: "";
      position: absolute;
      width: 95%;
      height: 5px;
      background-color: #fff4;
      top: 8px;
      left: 50%;
      border-radius: 20px;
      transform: translateX(-50%);
    }

    .percentBar {
      position: relative;
      display: block;
      width: 0;
      height: 10px;
      background-color: #03a9f4;
      border-radius: 20px;

      .number {
        position: absolute;
        top: -64px;
        right: -55px;
        padding: 10px 15px;
        color: #03a9f4;
        border-radius: 50px;
        border-bottom-left-radius: 0;
        box-shadow: inset 0 10px 5px rgba(0, 0, 0, 0.075),
          0 15px 8px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.05),
          inset 0 -10px 15px rgba(255, 255, 255, 0.9);
      }
    }
  }

  h2 {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    font-weight: 500;
    font-size: 4em;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    transition: 0ms.5s;
    color: #fff;
  }
`;
