import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #222;
    overflow: hidden;
  }
`;

export const Wrap = styled.div`
  .slide {
    width: 300px;
    height: 400px;
    overflow: hidden;
    border-radius: 1.5em;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0;
    transition: all ease 1s, left ease 0s;

    &.active {
      width: 100%;
      height: 100vh;
      left: 50% !important;
      cursor: default;
      opacity: 1;
      transition: all ease 1s;
    }

    &.previous {
      left: 0 !important;
      top: 50%;
      z-index: 2;
      opacity: 1;
      transition: all 1s ease;

      &::before {
        content: "PREVIOUS";
        position: absolute;
        top: 50%;
        left: calc(100% - 140px);
        color: white;
        font-weight: bold;
        transform: rotate(-90deg) translateY(-50%);
        font-size: 2rem;
        visibility: visible;
      }

      &:hover {
        transform: translate(-25%, -50%);
      }
    }

    &.next {
      left: 100% !important;
      top: 50%;
      z-index: 2;
      opacity: 1;
      transition: all 1s ease;

      &::after {
        content: "NEXT";
        position: absolute;
        top: 50%;
        left: 10px;
        color: white;
        font-weight: bold;
        transform: rotate(90deg) translateY(-50%);
        font-size: 2rem;
        visibility: visible;
      }

      &:hover {
        transform: translate(-75%, -50%);
      }
    }

    img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
    }
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: calc(100% - 300px);
    color: white;
    font-size: 8rem;
    opacity: 0;
    transition: opacity 1s ease;

    &.active {
      opacity: 1;
      transform: translate(-50%, -50%);
      z-index: 99;
    }
  }
`;
