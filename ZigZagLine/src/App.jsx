import styled from "styled-components";

export default function App() {
  const array = [0, 1, 2, 3];

  return (
    <Wrap>
      <div className="container">
        <div className="square">
          {array.map((idx) => {
            return <Line number={idx} />;
          })}
        </div>
        <div className="square">
          {array.map((idx) => {
            return <Line number={idx} />;
          })}
        </div>
        <div className="square">
          {array.map((idx) => {
            return <Line number={idx} />;
          })}
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;

  .container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .square {
    position: absolute;
    width: 200px;
    height: 200px;
  }

  .container .square:nth-child(2) {
    transform: translate(-25%, -25%) rotateX(180deg);
    filter: hue-rotate(60deg);
  }

  .container .square:nth-child(3) {
    transform: translate(25%, 25%) rotate(180deg);
    filter: hue-rotate(180deg);
  }

  .container .square::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #0f0;
    box-shadow: 0 0 0 8px #0f03, 0 0 0 15px #0f01;
    animation: animateSqure 4s linear infinite;
  }

  @keyframes animateSqure {
    0% {
      transform: translate(2px, 2px);
    }

    25% {
      transform: translate(178px, 2px);
    }

    50% {
      transform: translate(178px, 178px);
    }

    75% {
      transform: translate(2px, 178px);
    }

    100% {
      transform: translate(2px, 2px);
    }
  }
`;

const Line = styled.span`
  position: absolute;
  inset: 10px;
  overflow: hidden;
  transform: ${(props) => `rotate(calc(90deg * ${props.number})`});

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    background: #0f0;
    transform: translateX(-100%);
    animation : animate 4s linear infinite;
    animation-delay : ${(props) => `calc(1s * ${props.number})`}
  }

  @keyframes animate {
    0%{
      transform : translateX(-100%)
    }

    50%,100% {
      transform: translateX(100%)
    }
  }
`;
