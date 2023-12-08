import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Jua&family=Poppins:wght@300;500;600;800;900&display=swap');



  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #002222;
  }
  
`;

export const Wrap = styled.div`
  font-family: "Poppins", sans-serif;

  nav {
    background-color: #66ff00;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;

    .logo {
      font-size: 2.3em;
      font-weight: 800;
      color: #002222;
      letter-spacing: 2px;
    }

    ol {
      display: flex;
      position: relative;
      margin: auto 0;

      li {
        margin: 0 30px;
        list-style: none;
        z-index: 111;

        a {
          display: block;
          color: #002222;
          font-size: 1.5em;
          text-decoration: none;
          transition: 0.2s 0.1s ease;
        }
      }

      .slider {
        position: absolute;
        height: 75px;
        width: 150px;
        left: 10px;
        top: -24px;
        background-color: #002222;
        border-radius: 15px 15px 0 0;
        transform: translateX(0);
        transition: 0.2s 0.1s ease;

        &::before {
          content: "";
          position: absolute;
          height: 25px;
          width: 25px;
          background-color: #66ff00;
          bottom: 0;
          left: -25px;
          border-bottom-right-radius: 15px;
          box-shadow: 13px 0 0 #002222;
        }

        &::after {
          content: "";
          position: absolute;
          height: 25px;
          width: 25px;
          background-color: #66ff00;
          bottom: 0;
          right: -25px;
          border-bottom-left-radius: 15px;
          box-shadow: -13px 0 0 #002222;
        }
      }
    }
  }

  input {
    display: none;
  }
`;
