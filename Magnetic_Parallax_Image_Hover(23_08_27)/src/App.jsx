import React, { useRef } from "react";
import { GlobalStyle, Wrap } from "./styles";

const App = () => {
  //ref는 useEffect 밖에서 선언
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const mouseMoveFunc = (e, ref) => {
    //리액트에서 e.offset 이 아닌 e.nativeEvent.offset으로 사용
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    let cardWidth = ref.current.clientWidth;
    let cardHeight = ref.current.clientHeight;
    let transX = x - cardWidth / 2;
    let transY = y - cardHeight / 2;

    ref.current.style.transform = `translate(${transX}px, ${transY}px)`;
    ref.current.style.backgroundPosition = `${-x / 2}px ${-y / 2}px`;
  };

  const mouseOutFunc = (ref) => {
    ref.current.style.transform = "";
    ref.current.style.backgroundPosition = "";
  };

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="container">
          <div
            //e를 변수로 넘겨주면서 onMouseMove의 기본 메소드를 사용 가능
            onMouseMove={(e) => {
              mouseMoveFunc(e, ref1);
            }}
            onMouseOut={() => {
              mouseOutFunc(ref1);
            }}
            ref={ref1}
            className="card img1"
          >
            <h2>Image 01</h2>
          </div>
          <div
            onMouseMove={(e) => {
              mouseMoveFunc(e, ref2);
            }}
            onMouseOut={() => {
              mouseOutFunc(ref2);
            }}
            ref={ref2}
            className="card img2"
          >
            <h2>Image 02</h2>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default App;
