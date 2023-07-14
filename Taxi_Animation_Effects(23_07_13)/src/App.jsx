import React from "react";
import { Wrap } from "./styles";

const App = () => {
  return (
    <Wrap>
      <div className="road">
        <div className="taxi">
          <div className="light_beam"></div>
          <span>
            <b></b>
            <i></i>
          </span>
        </div>
        <div className="taxi">
          <div className="light_beam"></div>
          <span>
            <b></b>
            <i></i>
          </span>
        </div>
      </div>
    </Wrap>
  );
};

export default App;
