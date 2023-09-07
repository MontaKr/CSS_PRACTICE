import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  font-size: 24px;
  color: white;
}
`;

export const Wrap = styled.div`
  .spacer {
    height: 100vh;
  }

  .animated-element {
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #9400df;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    left: -400px;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 0.85em;
    line-height: 1.4em;
    margin-bottom: 0;
  }
`;
