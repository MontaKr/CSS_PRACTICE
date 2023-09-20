import React from "react";
import { GlobalStyle, Wrap } from "./styles";
import logo from "./cocacola_logo.png";
import cola from "./cocacola.png";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="card">
          <div className="circle">
            <img src={logo} className="logo" />
          </div>
          <div className="content">
            <h2>Cocacola</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              distinctio id eveniet obcaecati perspiciatis.
            </p>
            <a href="#">Explore More</a>
          </div>
          <img src={cola} className="product_img" />
        </div>
      </Wrap>
    </>
  );
};

export default App;
