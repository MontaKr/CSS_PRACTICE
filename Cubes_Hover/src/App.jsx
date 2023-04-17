import styled from "styled-components";

export default function App() {
  const array = [3, 2, 1];
  const array_1 = [
    { a: -1, b: 0 },
    { a: 0, b: 0 },
    { a: 1, b: 0 },
  ];

  return (
    <Wrap>
      <div className="container">
        {array.map((val) => {
          return (
            <Cube number={val}>
              {array_1.map((idx) => {
                return (
                  <Style number={val} numeric_a={idx.a} numeric_b={idx.b}>
                    {array.map((idx) => {
                      return <span></span>;
                    })}
                  </Style>
                );
              })}
            </Cube>
          );
        })}
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  background: #25335b;

  .container {
    position: relative;
    top: -80px;
    transform: skewY(-20deg);
    animation: animate 5s linear infinite;
  }

  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

const Cube = styled.div`
  position: relative;
  z-index: 2;

  &:nth-child(2) {
    z-index: 1;
    translate: -60px -60px;
  }

  &:nth-child(3) {
    z-index: 3;
    translate: 60px 60px;
  }
`;

const Style = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 30px;
  translate: ${(props) =>
    `calc(-70px * ${props.numeric_a}) calc(-60px * ${props.numeric_b})`};

  span {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    background: #dcdcdc;
    z-index: ${(props) => `calc(1*${props.number})`};
    transition: 1.5s;
  }

  span:hover {
    transition: 0s;
    background: #ef4149;
    filter: drop-shadow(0 0 30px #ef4149);
  }

  span::before {
    content: "";
    position: absolute;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #fff;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 1.5s;
  }

  span:hover::before {
    transition: 0s;
    background: #f75d64;
  }

  span::after {
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #f2f2f2;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 1.5s;
  }

  span:hover::after {
    transition: 0s;
    background: #f14e55;
  }
`;
