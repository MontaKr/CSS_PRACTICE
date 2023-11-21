import React from "react";
import { GlobalStyle, Section } from "./styles";

const App = () => {
  const array = [
    { clr: "tomato" },
    { clr: "seagreen" },
    { clr: "aqua" },
    { clr: "royalblue" },
  ];

  return (
    <>
      <GlobalStyle />
      <>
        {array.map((val, idx) => {
          return (
            <Section clr={val.clr} key={idx}>
              <div className="box">
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  commodi iure atque, nulla quis suscipit.
                </h1>
                <h2>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni repudiandae sit similique, quia architecto vero modi
                  atque! Distinctio, in ipsum.
                </h2>
              </div>
            </Section>
          );
        })}
      </>
    </>
  );
};

export default App;
