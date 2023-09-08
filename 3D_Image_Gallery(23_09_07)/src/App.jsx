import { Span, GlobalStyle, Wrap } from "./styles";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import { useState } from "react";

const App = () => {
  const [degree, setDegree] = useState(0);

  const imgArray = [
    { num: 1, src: img1 },
    { num: 2, src: img2 },
    { num: 3, src: img3 },
    { num: 4, src: img4 },
    { num: 5, src: img5 },
    { num: 6, src: img6 },
    { num: 7, src: img7 },
    { num: 8, src: img8 },
  ];

  return (
    <>
      <GlobalStyle />
      <Wrap degree={degree}>
        <div className="container">
          <div className="box">
            {imgArray.map((val, idx) => {
              return (
                <Span num={val.num}>
                  <img src={val.src} />
                </Span>
              );
            })}
          </div>
          <div className="btns">
            <div
              className="btn prev"
              onClick={() => {
                setDegree(degree + 45);
              }}
            ></div>
            <div
              className="btn next"
              onClick={() => {
                setDegree(degree - 45);
              }}
            ></div>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default App;
