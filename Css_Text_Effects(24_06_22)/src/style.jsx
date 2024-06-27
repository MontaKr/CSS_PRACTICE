import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: #262626;
        background-image: linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px);
        background-size: 4vh 4vh;
    }
`

export const Wrap = styled.h2`
  display: inline-block;
  color: #fff;
  font-size: 4em;
  font-weight: 600;
  padding: 0 100px;  
`

export const AnimatedSpan = styled.span`
position: relative;
  color: transparent;
  -webkit-text-stroke: 1px #01fe87;
  line-height: 1.2em;
  padding: 5px 10px;
  animation: displayText 12s infinite;
  animation-delay: calc(-3s * ${({ index }) => index});

  &::before {
    content: ${({ dataText }) => `"${dataText}"`};
    position: absolute;
    width: 0;
    height: 100%;
    top: -2px;
    left: -2px;
    color: #01fe87;
    overflow: hidden;
    white-space: nowrap;
    border: 2px solid #01fe87;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 10px;
    animation: animate 3s linear infinite;
    filter: drop-shadow(0 0 25px #01fe87);
  }

  @keyframes displayText {
    0% {
      display: inline-block;
    }
    25%,
    100% {
      display: none;
    }
  }

  @keyframes animate {
    0%,
    10%,
    100% {
      width: 0;
    }
    70%,
    90% {
      width: 100%;
    }
  }
`