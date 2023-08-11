import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
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
    background: #29313a;
  }
  

`;

export const Wrap = styled.div`
  .inputBox {
    position: relative;
    width: 350px;

    input {
      position: relative;
      width: 100%;
      padding: 10px 0;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 2px solid #999;
      color: #fff;
      font-size: 1.25em;
      transition: 0.5s;
      letter-spacing: 0.05em;
    }

    input:focus ~ label span,
    input:valid ~ label span {
      color: #0f0;
      text-shadow: 0 0 5px #0f0, 0 0 15px #0f0, 0 0 30px #0f0;
      transform: translateY(-30px);
    }

    input:focus,
    input:valid {
      border-bottom: 2px solid #fff;
    }

    label {
      position: absolute;
      left: 0;
      padding: 10px 0;
      pointer-events: none;
      color: #666;
      user-select: none;

      span {
        position: relative;
        display: inline-flex;
        flex-direction: row;
        font-size: 1.25em;
        letter-spacing: 0.05em;
        transition: 0.25s cubic-bezier(0.5, 1, 0.5, 1.5);
      }
    }
  }
`;
