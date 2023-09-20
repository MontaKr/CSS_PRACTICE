import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

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
  background: #151515;
}
`;

export const Wrap = styled.div`
  .card {
    position: relative;
    width: 350px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;

    &:hover {
      width: 600px;
      transition-delay: 0.5s;

      .circle {
        &::before {
          transition-delay: 0.5s;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: #f40103;
        }

        .logo {
          transform: scale(0);
          transition-delay: 0s;
        }
      }

      .product_img {
        transition-delay: 0.75s;
        top: 25%;
        left: 72%;
        height: 500px;
        transform: translate(-50%, -50%) scale(1) rotate(15deg);
      }

      .content {
        transition-delay: 0.75s;
        opacity: 1;
        visibility: visible;
        left: 20px;
      }
    }

    .circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 350px;
        height: 350px;
        border-radius: 50%;
        background: #191919;
        border: 8px solid #f40103;
        filter: drop-shadow(0 0 10px #f40103) drop-shadow(0 0 60px #f40103);
        transition: 0.5s, background 0.5s;
        transition-delay: 0.75s, 1s;
      }

      .logo {
        position: relative;
        width: 250px;
        transition: 0.5s;
        transition-delay: 0.5s;
      }
    }

    .product_img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0) rotate(315deg);
      height: 300px;
      transition: 0.5s ease-in-out;
    }

    .content {
      position: absolute;
      width: 50%;
      left: 20%;
      padding: 20px 20px 20px 40px;
      opacity: 0;
      transition: 0.5s;
      visibility: hidden;

      h2 {
        color: #fff;
        text-transform: uppercase;
        font-size: 2.5em;
        line-height: 1em;
      }

      p {
        color: #fff;
      }

      a {
        position: relative;
        color: #111;
        background: #fff;
        padding: 10px 20px;
        border-radius: 10px;
        display: inline-block;
        text-decoration: none;
        font-weight: 600;
        margin-top: 10px;
      }
    }
  }
`;
