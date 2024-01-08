import styled, {createGlobalStyle, keyframes} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    display: grid;
    place-content: center;
  }
`

export const Wrap = styled.div`
  .loader {
    width: 200px;
    aspect-ratio: 1;
    display: grid;
    background: linear-gradient(135deg, #00a8c6, #8fbe00);
    clip-path: inset(10%);

    &::before {
      content: "";
      padding: 10%;
      --_g : no-repeat content-box radial-gradient(50% 50%, #000 95%, #0000);
      background: var(--_g), var(--_g), var(--_g), var(--_g), #fff;
      background-size: 20% 20%;
      filter: blur(5px) contrast(20);
      mix-blend-mode: lighten;
      animation : l 3s infinite, s 3s infinite;
    }
  }

  @keyframes l {
    0%,
    100% {
      background-position: top, right ,bottom, left;
      }
    
    20% {
      background-position: center, right ,bottom, left;
      }
      
    40% {
    background-position: center, center ,bottom, left;
    }

    60% {
    background-position: center, center ,center, left;
    }

    80% {
    background-position: center, center ,center, center;
    } 
  }


  @keyframes s {
    0%,
    25%,
    90% {
      background-size: 20% 20%, 20% 20%, 20% 20%, 20% 20%;
    }

    40%,
    45% {
      background-size: 30% 30%, 20% 20%, 20% 20%, 20% 20%;
    }

    60%,
    65% {
      background-size: 40% 40%, 20% 20%, 20% 20%, 20% 20%;
    }

    80%,
    85% {
      background-size: 50% 50%, 20% 20%, 20% 20%, 20% 20%;
    }
  }
`

