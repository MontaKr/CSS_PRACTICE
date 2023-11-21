import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 2em;
  }

  ::-webkit-scrollbar-track {
    background-color: hsl(120 75% 90% / 1);
    border-radius: 100vw;
    margin-block: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsl(120 100% 85% / 1);
    border: 0.25em solid hsl(120 75% 50% / 1);
    border-radius: 100vw;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: hsl(120 100% 10% / 1);
  }

  @supports (scrollbar-color : red blue) {
    * {
      scrollbar-color: red blue;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Section = styled.div`
  background-color: ${(props) => props.clr};
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    text-align: center;
    width: 75%;

    h1 {
      font-size: 40px;
      margin-bottom: 50px;
    }
  }
`;
