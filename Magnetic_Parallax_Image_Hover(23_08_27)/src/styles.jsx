import styled, { createGlobalStyle } from "styled-components";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #0f222f;
  }
`;

export const Wrap = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 150px;

    .card {
      position: relative;
      width: 300px;
      height: 300px;
      background: var(--img);
      background-size: 650px;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;
      transition: 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;

      &.img1 {
        background: url(${img1});
        background-size: 650px;
        background-position: center;
      }

      &.img2 {
        background: url(${img2});
        background-size: 650px;
        background-position: center;
      }

      h2 {
        background: #fff;
        color: #0f222f;
        padding: 5px 25px;
        font-size: 2em;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
        pointer-events: none;
        opacity: 0;
        transition: 0.5s;
      }

      &:hover h2 {
        opacity: 1;
      }
    }
  }
`;
