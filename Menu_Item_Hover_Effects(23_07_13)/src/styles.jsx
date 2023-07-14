import styled from "styled-components";

export const Wrap = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0d0f1b;
  overflow: hidden;

  ul:hover {
    li {
      a {
        opacity: 0;
      }
    }
  }

  ul {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

export const Box = styled.li`
  list-style: none;

  &:hover::before {
    opacity: 0.05;
    letter-spacing: 0px;
  }

  &:before {
    content: "${(props) => props.text}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 6em;
    font-weight: 700;
    pointer-events: none;
    opacity: 0;
    letter-spacing: 20px;
    transition: 0.5s;
    white-space: nowrap;
  }

  a {
    position: relative;
    display: inline-block;
    padding: 6px 15px;
    text-decoration: none;
    background: #2166f3;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    overflow: hidden;
    transition: 0.5s;
    z-index: 1;
  }

  a:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100px;
    width: 80px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
    transform: skewX(35deg);
    transition: 0s;
  }

  a:hover {
    transform: scale(1.4);
    z-index: 1000;
    background: #ff3f81;
    opacity: 1 !important;

    &:before {
      left: calc(100% + 100px);
      transition: 0.5s;
      transition-delay: 0.2s;
    }
  }
`;
