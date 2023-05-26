import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const App = () => {
  return (
    <Wrap>
      <section>
        <div className="gooey">
          <Draggable>
            <span />
          </Draggable>
          <Draggable>
            <span />
          </Draggable>
          <Draggable>
            <span />
          </Draggable>
          <Draggable>
            <span />
          </Draggable>
          <Draggable>
            <span />
          </Draggable>
          <Draggable>
            <span />
          </Draggable>
        </div>
      </section>
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  margin: 0;
  padding: 0;

  section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    filter: contrast(50);
    overflow: hidden;

    .gooey span {
      width: 100px;
      height: 100px;
      background: #000;
      display: inline-block;
      border-radius: 50%;
      filter: blur(25px);
      animation: animate 5s ease-in-out infinite;
    }

    @keyframes animate {
      0%,
      100% {
        margin: 10px;
      }

      50% {
        margin: -50px;
      }
    }
  }
`;
