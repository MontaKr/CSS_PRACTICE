import React from "react";
import { GlobalStyle, Wrap, Card } from "./styles";

const App = () => {
  const cardArray = [
    { i: -4, content: 1 },
    { i: -3, content: 2 },
    { i: -2, content: 3 },
    { i: -1, content: 4 },
    { i: 0, content: 5 },
    { i: 1, content: 6 },
    { i: 2, content: 7 },
    { i: 3, content: 8 },
    { i: 4, content: 9 },
  ];

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="container">
          {cardArray.map((val, idx) => (
            <Card i={val.i} key={idx}>
              {val.content}
            </Card>
          ))}
        </div>
      </Wrap>
    </>
  );
};

export default App;
