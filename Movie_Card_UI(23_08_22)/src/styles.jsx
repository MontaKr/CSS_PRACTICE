import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=PT+Sans");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "PT Sans", sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(#007bb2, #0d1423);
  }
`;

export const Wrap = styled.div`
  .card {
    position: relative;
    width: 320px;
    height: 450px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);

    &:hover {
      .poster {
        &::before {
          bottom: 0;
        }

        img {
          transform: translateY(-50px);
          filter: blur(5px);
        }
      }

      .details {
        bottom: 0;
      }
    }

    .poster {
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        bottom: -180px;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #1064a6 50%, transparent);
        transition: 0.5s;
        z-index: 1;
      }

      img {
        transition: 0.5s;
        width: 100%;
      }
    }

    .details {
      position: absolute;
      width: 100%;
      bottom: -160px;
      left: 0;
      padding: 20px;
      z-index: 2;
      transition: 0.5s;

      .logo {
        max-width: 180px;
      }

      h3 {
        font-size: 0.8em;
        color: #fff;
      }

      .rating {
        position: relative;
        padding: 5px 0;

        .fa-star {
          color: #f7f406;
          font-size: 1em;
        }

        span {
          color: #fff;
          margin-left: 5px;
        }
      }

      .tags {
        position: relative;
        margin-top: 5px;

        span {
          padding: 2px 5px;
          margin-right: 5px;
          color: #fff;
          background: #03a8f5;
          border-radius: 4px;

          &:nth-child(2) {
            background: #ff5722;
          }
        }
      }

      .info {
        color: #fff;
        margin-top: 20px;
      }

      .cast {
        position: relative;

        h4 {
          color: #fff;
          margin-top: 10px;
        }

        ul {
          position: relative;
          display: flex;
          gap: 10px;
          margin-top: 10px;

          li {
            list-style: none;
            width: 35px;
            height: 35px;
            overflow: hidden;
            border-radius: 50%;
            border: 2px solid white;

            img {
              max-width: 100%;
            }
          }
        }
      }
    }
  }
`;
