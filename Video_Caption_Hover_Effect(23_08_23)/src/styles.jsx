import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");
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
  }
`;

export const Wrap = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;

    .box {
      position: relative;
      width: 450px;
      height: 320px;
      background: #000;

      &:hover {
        .contentBx {
          transition: transform 0.5s;
          transform-origin: left;
          transform: scaleX(1);

          .content {
            opacity: 1;
            transition: 0.5s;
            transition-delay: 0.5s;
          }
        }
      }

      .videoBx {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .contentBx {
        position: absolute;
        top: 40px;
        bottom: 40px;
        right: 40px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.95);
        transition: transform 0.5s;
        transform-origin: right;
        transform: scaleX(0);

        .content {
          position: relative;
          padding: 20px 60px;
          opacity: 0;

          h2 {
            color: #fff;
            font-weight: 500;
            margin-bottom: 10px;
          }

          p {
            color: #fff;
            font-weight: 300;
          }
        }
      }
    }
  }
`;
