import React from "react";
import { GlobalStyle, Wrap } from "./styles";
import bg1 from "./bg1.mp4";
import bg2 from "./bg2.mp4";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="container">
          <div className="box">
            <div className="videoBx">
              <video src={bg1} muted autoPlay={true} loop={true}></video>
            </div>
            <div className="contentBx">
              <div className="content">
                <h2>Video Caption One</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Esse, voluptatibus doloremque hic, non, adipisci facere ullam
                  praesentium explicabo aperiam fuga porro architecto aut?
                  Nesciunt aperiam quod eos possimus qui perspiciatis.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="videoBx">
              <video src={bg2} muted autoPlay={true} loop={true}></video>
            </div>
            <div className="contentBx">
              <div className="content">
                <h2>Video Caption Two</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Esse, voluptatibus doloremque hic, non, adipisci facere ullam
                  praesentium explicabo aperiam fuga porro architecto aut?
                  Nesciunt aperiam quod eos possimus qui perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default App;
