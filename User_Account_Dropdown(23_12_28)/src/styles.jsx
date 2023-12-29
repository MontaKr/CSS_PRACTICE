import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: sans-serif;
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
  }
`

export const Wrap = styled.div`
  nav {
    display: flex;
    height: 80px;
    align-items: center;
    box-shadow: 0 2px 1px black;

    .logo {
      /* background-color: tomato; */
      font-size: 2rem;
      font-weight: bold;
      text-transform: uppercase;
      font-family: monospace;
      margin-left: 50px;
      width: 100%;
      cursor: pointer;
    }

    .link {
      /* background-color: seagreen; */
      display: flex;
      align-items: center;
      gap: 20px;
      position: relative;
      margin: 0 50px;

      li {
        /* background-color: skyblue; */
        margin: 0 5px;
        position: relative;
        padding: 5px 2px;

        a {
          color: black;
          font-size: 1.2rem;

          &::before {
            content: "";
            position: absolute;
            width: 0%;
            bottom: -3px;
            height: 3px;
            background: black;
            left: 50%;
            transform: translateX(-50%);
            transition: 0.3s;
          }

          &:hover::before {
            width: 100%;
          }
        }
      }
    }

    .account {
      position: relative;
      width: 80px;
      margin-right: 50px;

      .profile {
        position: absolute;
        right: 0;
        top: 0;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid #0000002f;
        overflow: hidden;
        cursor: pointer;

        &:hover {
          border: 2px solid #000000;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .menu {
        width: 260px;
        border: 4px solid black;
        position: absolute;
        right: -80px;
        top: 50px;
        border-radius: 12px;
        background: linear-gradient(135deg, #353535, #4d4d4d);
        box-shadow: 0 0 50px #00000077;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;

        &.js-active {
          visibility: visible;
          opacity: 1;
          right: -20px;
        } 

        &::before {
          content: "";
          width: 15px;
          height: 15px;
          background: linear-gradient(135deg, #111 50%, #0000 0%);
          position: absolute;
          rotate: 45deg;
          top: -7px;
          right: 35px;
        }

        h3 {
          text-align: center;
          font-size: 1.4rem;
          color: white;
          margin: 18px 0 5px;
        }

        p {
          text-align: center;
          color: white;
          margin-bottom: 20px;
          font-family: monospace;
          text-transform: uppercase;
        }

        ul {
          margin-bottom: 15px;

          li {
            padding: 15px 20px;
            border-top: 1px solid #3333336b;
            cursor: pointer;
            transition: 0.5s;

            &:hover {
              background: #f8f8f831;

              .menu-icon {
                color: white;
              }
            }

            .menu-icon {
              font-size: 1.3rem;
              color: #b4b4b4;
              transition: 0.5s;
            }

            a {
              font-size: 1.3rem;
              margin-left: 20px;
              color: white;
            }
          }
        }
      }
    }
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`