import React, { useEffect } from "react";
import { GlobalStyle, Wrap } from "./styles";

const App = () => {
  useEffect(() => {
    let w = 30;
    let h = 30;

    const pixel = () => {
      for (var i = 0; i < h; i++) {
        for (var j = 0; j < w; j++) {
          let span = document.createElement("span");
          let random = Math.random() * 1;
          let randomFixed = random.toFixed(2);
          document.getElementById("pixel").appendChild(span);

          span.style.left = j * 10 + "px";
          span.style.top = i * 10 + "px";
          span.style.backgroundPosition =
            -j * 10 + "px " + -i * 10 + "px, center";
          span.style.animationDelay = randomFixed + "s";
          span.style.backgroundSize = "300px 300px";
        }
      }
    };

    pixel();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="box">
          <div id="pixel"></div>
        </div>
      </Wrap>
    </>
  );
};

export default App;
