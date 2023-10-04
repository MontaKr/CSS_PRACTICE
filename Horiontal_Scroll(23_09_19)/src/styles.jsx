import styled, { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  

  * {
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins:wght@200;400;700&display=swap");
  box-sizing: border-box;
  }

  body {
    margin: 0;
    height: 100vh;
    font-family: "Poppins";
  }

  
`;

export const Wrap = styled.div`
  .wrapper {
    overflow-x: hidden;
    position: relative;

    .container {
      display: flex;
      width: 300vw;

      svg {
        position: absolute;
        top: 12em;
        left: 10vw;
        width: 50vw;

        .mask {
          width: 0;
        }
      }

      .col {
        display: flex;
        gap: 3em;

        p {
          font-size: 0.8em;
        }
      }

      section {
        width: 100vw;
        padding: 20vw 10vw;

        h1 {
          font-size: 3em;
          margin: 0;
        }

        p {
          font-size: 1.2em;
          width: 50vw;
        }

        ul {
          list-style: none;
          display: flex;
          gap: 3em;
          width: 100%;
          height: 300px;
          padding: 0;

          li {
            background: #fff;
            border-radius: 0.3em;
            flex-grow: 1;
          }
        }
      }
    }
  }
`;
