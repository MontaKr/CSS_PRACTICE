  import styled, {createGlobalStyle} from "styled-components"

  export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:100,200,300,400,500,600,700,800,900");

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
    }
  `

  export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #222;
    gap: 50px;
    flex-direction: column;
  `

  export const Anchor = styled.a`
    position: relative;
    padding: 20px 60px;
    background-color: rgba(45, 45, 45, 1);
    border-radius: 50px;
    color: #999;
    font-size: 1.5em;
    text-transform: uppercase;
    text-decoration: none;
    overflow: hidden;
    transition: 0.5s;

    &:hover {
      color: ${props=>props.color};
      text-shadow: 0 0 15px ${props=>props.color}, 0 0 40px ${props=>props.color};

      &::before {
        opacity: 1;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: var(--y);
      left: var(--x);
      transform: translate(-50%, -50%);
      background: radial-gradient(${props=>props.color}, transparent, transparent);
      width: 200px;
      height: 200px;
      opacity: 0;
      transition: 0.5s, top 0s, left 0s;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 2px;
      background-color: rgba(45, 45, 45, 0.8);
      border-radius: 48px;
    }

    span {
      position: relative;
      z-index: 1;
      letter-spacing: 0.2em;
    }
  `