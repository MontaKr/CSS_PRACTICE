import styled from "styled-components";

export default function App() {
  return (
    <Wrap>
      <div className="circle"></div>
      <div className="glass">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0;
  padding: 0%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #161623;
  overflow: hidden;

  .circle {
    position: absolute;
    width: 400px;
    height: 400px;
    background: linear-gradient(#03a9f4, #23ff2c);
    border-radius: 50%;
    animation: animate 10s ease-in-out infinite;
  }

  @keyframes animate {
    0%,
    100% {
      transform: translateX(-700px);
    }
    50% {
      transform: translateX(700px);
    }
  }

  .glass {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .glass .layer {
    position: relative;
    width: 30px;
    height: 100vh;
    margin: 1px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(20px);
  }

  .glass .layer:nth-child(4n + 1) {
    backdrop-filter: blur(10px);
  }

  .glass .layer:nth-child(4n + 2) {
    backdrop-filter: blur(50px);
  }

  .glass .layer:nth-child(4n + 3) {
    backdrop-filter: blur(30px);
  }

  .glass .layer:nth-child(4n + 4) {
    backdrop-filter: blur(20px);
  }
`;
