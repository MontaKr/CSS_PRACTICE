import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --border-radius : 99999px;
    --border-gap : 2px;
    --gradient-pos-x : 50%;
    --gradient-pos-y : 50%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #111;
    display: grid;
    place-items: center;
    height: 100vh;
  }
`;

export const Wrap = styled.div`
  .button {
    position: relative;
    display: inline-block;
    border: none;
    border-radius: var(--border-radius);
    background: grey;
    padding: var(--border-gap);
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;

    .content {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      line-height: 1.5rem;
      padding: 1rem;
      white-space: nowrap;
      color: #ffffff;
      background-color: #0d0d12;
      border-radius: var(--border-radius);
      width: calc(100%- var(--border-gap));
      height: calc(100%- var(--border-gap));
    }

    .border,
    .neon {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      overflow: hidden;
      border-radius: var(--border-radius);

      .gradient {
        position: absolute;
        inset: -100px;
        background: conic-gradient(
          from 0deg at var(--gradient-pos-x) var(--gradient-pos-y),
          #1e87ff,
          #5c13c4,
          #ff0033,
          #ffda00,
          #64bc26,
          #1e87ff
        );
        animation: rotate 2s linear infinite;
      }
    }

    .neon {
      filter: blur(10px);
      opacity: 0.5;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
