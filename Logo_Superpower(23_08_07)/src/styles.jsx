import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #111;
    height: 100vh;
    display: grid;
    place-items: center;
    margin: 0;
    overflow: hidden;
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 300px;
  aspect-ratio: 1000 / 556;
  user-select: none;

  & > img {
    width: 100%;
    position: absolute;
  }
`;
