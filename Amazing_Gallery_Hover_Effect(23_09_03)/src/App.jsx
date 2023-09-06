import React, { useState } from "react";
import { Box, GlobalStyle, Wrap } from "./styles";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

const App = () => {
  const [isHovered, setIsHovered] = useState(null);

  const box = [
    { name: "one", url: img1, text: "Spider Man" },
    { name: "two", url: img2, text: "Black Widow" },
    { name: "three", url: img3, text: "Ant Man" },
    { name: "four", url: img4, text: "Groot" },
    { name: "five", url: img5, text: "Scarlet Witch" },
  ];

  return (
    <>
      <GlobalStyle />
      <Wrap name={isHovered}>
        <div className="container">
          {box.map((val, idx) => {
            return (
              <Box
                onMouseEnter={() => {
                  setIsHovered(val.name);
                }}
                onMouseLeave={() => {
                  setIsHovered(null);
                }}
                img={val.url}
                key={idx}
                text={val.text}
              ></Box>
            );
          })}
        </div>
      </Wrap>
    </>
  );
};

export default App;
