import React, { useState } from "react";
import { Box, GlobalStyle, Wrap } from "./styles";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

const App = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

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
      <Wrap hovered={hoveredBox}>
        <div className="container">
          {box.map((val, idx) => {
            return (
              <Box
                onMouseEnter={() => setHoveredBox(val.name)}
                onMouseLeave={() => setHoveredBox(null)}
                img={val.url}
                name={val.text}
                key={idx}
              ></Box>
            );
          })}
        </div>
      </Wrap>
    </>
  );
};

export default App;
