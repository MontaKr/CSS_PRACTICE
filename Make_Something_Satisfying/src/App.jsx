import styled from "styled-components";

function App() {
  return (
    <Wrap>
      <div className="container">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>
      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 20 -10
          "
          />
        </filter>
      </svg>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
  overflow: hidden;

  .container {
    position: relative;
    width: 800px;
    display: flex;
    justify-content: space-between;
    filter: url(#gooey);

    .circle {
      position: relative;
      min-width: 300px;
      height: 300px;
      border-radius: 50%;
      background: #fff;

      &::before {
        content: "";
        position: absolute;
        top: -50px;
        left: -50px;
        right: -50px;
        bottom: -50px;
        border-radius: 50%;
        background: #fff;
        z-index: -1;
        filter: blur(50px);
      }
    }

    .circle1,
    .circle1::before {
      background: linear-gradient(90deg, #f00, #0ff);
    }

    .circle2,
    .circle2::before {
      background: linear-gradient(90deg, #ffeb3b, #da00ff);
    }

    .circle1 {
      animation: animate1 5s linear infinite;
    }

    @keyframes animate1 {
      0% {
        transform: translateX(0) rotate(0deg);
      }

      30% {
        transform: translateX(250px) rotate(240deg);
      }

      60% {
        transform: translateX(250px) rotate(480deg);
      }

      100% {
        transform: translateX(0) rotate(720deg);
      }
    }

    .circle2 {
      animation: animate2 5s linear infinite;
    }

    @keyframes animate2 {
      0% {
        transform: translateX(0) rotate(0deg);
      }

      30% {
        transform: translateX(-250px) rotate(-240deg);
      }

      60% {
        transform: translateX(-250px) rotate(-480deg);
      }

      100% {
        transform: translateX(0) rotate(-720deg);
      }
    }
  }

  svg {
    width: 0;
    height: 0;
  }
`;
