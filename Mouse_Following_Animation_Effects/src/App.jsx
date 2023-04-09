import styled from "styled-components";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export default function App() {
  return (
    <Wrap>
      <div className="box">
        {numbers.map((idx) => {
          return (
            <Container key={idx} number={idx}>
              <i></i>
            </Container>
          );
        })}
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
  background-color: #222;

  .box {
    position: relative;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
  }
`;

const Container = styled.span`
  position: absolute;
  width: 10px;
  height: 250px;
  background: transparent;
  transform-origin: bottom;
  border-bottom: 40px solid #222;
  transform: ${(props) => `rotate(calc(22.5deg * ${props.number}))`};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50px;
    background-color: #03a9f4;
    box-shadow: 0 0 20px #03a9f4;
    border-radius: 10px;
    animation: animate 1.5s linear infinite;
    animation-delay: ${(props) => `calc(0.1s*${props.number})`};
  }

  @keyframes animate {
    0% {
      transform: translateY(160px) rotate(0deg);
      filter: hue-rotate(0deg);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(160px) rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 17px;
    background: #03a9f4;
    /* transform-origin: bottom; */
    transform: rotate(8deg);
    animation: animateColor 1.5s linear infinite;
  }

  @keyframes animateColor {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  i {
    position: absolute;
    width: 15px;
    height: 100px;
    background: #222;
    border-left: 2px solid #03a9f4;
    border-right: 2px solid #03a9f4;
    transform-origin: top;
    transform: rotate(79deg);
    animation: animateColor 1.5s linear infinite,
      animateSide 1.5s linear infinite;
    animation-delay: ${(props) => `calc(0.1s*${props.number})`};
  }

  @keyframes animateSide {
    0%,
    40%,
    65.1%,
    100% {
      background: #222;
    }
    40.1%,
    65% {
      background: #03a9f4;
    }
  }
`;
