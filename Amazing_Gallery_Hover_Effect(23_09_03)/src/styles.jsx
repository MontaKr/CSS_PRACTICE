import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");
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
    background: #000;
  }

`;

export const Box = styled.div`
  position: relative;
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  transition: 0.25s;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: grayscale(0) brightness(1);

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    top: -1px;
    height: calc(100% + 2px);
    background: linear-gradient(#000, transparent, transparent, #000);
  }

  &::after {
    content: "${(props) => props.name}";
    position: absolute;
    bottom: -100px;
    background: #fff;
    color: #000;
    font-size: 1em;
    font-weight: 600;
    padding: 5px 10px;
    white-space: nowrap;
    transition: 0.5s;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    opacity: 0;
    transition-delay: 0s;
    -webkit-box-reflect: below 2px linear-gradient(transparentm #0003);
  }

  &:nth-child(even) {
    transform: translateY(30px);
  }

  &:nth-child(odd) {
    transform: translateY(-30px);
  }

  &:hover::after {
    opacity: 1;
    bottom: -60px;
    transition-delay: 0.25s;
  }
`;

export const Wrap = styled.div`
  .container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    width: 800px;
    height: 500px;
    background: #000;
    transition: 0.25s;

    grid-template-columns: ${(props) => {
      switch (props.hovered) {
        case "one":
          return "2fr 0.5fr 0.5fr 0.5fr 0.5fr";
        case "two":
          return "0.5fr 2fr 0.5fr 0.5fr 0.5fr";
        case "three":
          return "0.5fr 0.5fr 2fr 0.5fr 0.5fr";
        case "four":
          return "0.5fr 0.5fr 0.5fr 2fr 0.5fr";
        case "five":
          return "0.5fr 0.5fr 0.5fr 0.5fr 2fr";
        default:
          return "1fr 1fr 1fr 1fr 1fr";
      }
    }};

    &:hover ${Box} {
      filter: grayscale(1);
    }

    ${Box}:hover {
      filter: grayscale(0) brightness(1.25);
    }
  }
`;
