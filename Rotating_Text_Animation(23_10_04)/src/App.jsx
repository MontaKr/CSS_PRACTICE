import React from "react";
import { Container, GlobalStyle, Wrap } from "./styles";

const App = () => {
  const array = [
    { i: 1 },
    { i: 2 },
    { i: 3 },
    { i: 4 },
    { i: 5 },
    { i: 6 },
    { i: 7 },
    { i: 8 },
    { i: 9 },
    { i: 10 },
    { i: 11 },
    { i: 12 },
    { i: 13 },
    { i: 14 },
    { i: 15 },
    { i: 16 },
  ];

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="box">
          {array.map((val, idx) => {
            return (
              <Container i={val.i}>
                <i>EAT</i>
                SLEEP
                <i>CODE</i>
              </Container>
            );
          })}
        </div>
      </Wrap>
    </>
  );
};

export default App;
