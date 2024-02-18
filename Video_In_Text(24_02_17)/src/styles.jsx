import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    @import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
  }
`;

export const Wrap = styled.div`
  div {
    background-color: grey;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      font-family: "Righteous", cursive;
      background: url("https://media.giphy.com/media/OytSxIdCCNs9YqOw2w/giphy.gif");
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 7rem;
      letter-spacing: 10px;
      background-size: cover;
      margin: 0px;
      color: transparent;
    }
  }
`;
