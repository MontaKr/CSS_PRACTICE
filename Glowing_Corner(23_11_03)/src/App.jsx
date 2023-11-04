import React from "react";
import { GlobalStyle, Loader, Wrap } from "./styles";

const App = () => {
  const array = [
    { color: "#01e100", num: 1 },
    { color: "#f50076", num: 2 },
    { color: "#00e6fd", num: 3 },
    { color: "#d0ff00", num: 4 },
  ];

  return (
    <>
      <GlobalStyle />
      <Wrap>
        {array.map((val) => {
          return (
            <Loader key={val.num} color={val.color} num={val.num}></Loader>
          );
        })}
      </Wrap>
    </>
  );
};

export default App;
