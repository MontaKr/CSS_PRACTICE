import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #131313;
}
`;

export const Wrap = styled.div`
  .container {
    display: flex;
    gap: 50px;

    .box {
      position: relative;
      width: 300px;
      height: 420px;
      background: #232323;
      border-radius: 20px;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: ${({ position }) => position.y}px;
        left: ${({ position }) => position.x}px;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-radius: 50%;
        background: #9bdc28;
        transition: 0.5s, top 0s, left 0s;
      }

      &:hover::before {
        width: 1100px;
        height: 1100px;
      }
    }
  }
`;
