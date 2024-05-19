import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Source Code Pro', monospace;
  }
`;

export const Wrap = styled.div`
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    width: 100%;
    background-color: #0e0e0e;

    .numbers {
      position: relative;
      cursor: default;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      span {
        position: relative;
        font-size: 3em;
        font-weight: 900;
        color: rgba(255, 255, 255, 0.05);
        line-height: 0.9em;
        transition: 1s;
        user-select: none;

        &:hover {
          transition: 0s;
          color: #fff;
          text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0,
            0 0 80px #0f0, 0 0 160px #0f0;
          z-index: 1000;
        }
      }
    }
  }
`;
