import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle``

export const Wrap = styled.div`
  background-color: #fff;

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .preloader {
      animation: rotate 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;

      span {
        position: absolute;
        display: block;
        height: 64px;
        width: 64px;
        background: red;
        border: 1px solid red;
        border-radius: 100%;

        &:nth-child(1) {
          transform: translate(-28px, -28px);
          animation: shape_1 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
        }

        &:nth-child(2) {
          transform: translate(28px, -28px);
          animation: shape_2 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
        }

        &:nth-child(3) {
          position: relative;
          border-radius: 0px;
          transform: scale(0.98) rotate(-45deg);
          animation: shape_3 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
        }
      }
    }

    .shadow {
      position: relative;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      height: 16px;
      width: 64px;
      border-radius: 50%;
      background-color: #d9d9d9;
      border: 1px solid #d9d9d9;
      animation: shadow 2.3s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    }
  }

  @keyframes rotate {
    50% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(720deg);
    }
  }

  @keyframes shape_1 {
    60% {
      transform: scale(0.4);
    }
  }

  @keyframes shape_2 {
    40% {
      transform: scale(0.4);
    }
  }

  @keyframes shape_3 {
    50% {
      border-radius: 100%;
      transform: scale(0.5) rotate(-45deg);
    }

    100% {
      transform: scale(0.98) rotate(-45deg);
    }
  }

  @keyframes shadow {
    50% {
      transform: translateX(-50%) scale(0.5);
      border-color: #f2f2f2;
    }
  }
`