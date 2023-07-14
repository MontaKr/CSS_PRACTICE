import React from "react";
import { Wrap, Box } from "./styles";

const App = () => {
  const data = [
    {
      text: "Home",
    },
    {
      text: "About",
    },
    {
      text: "Services",
    },
    {
      text: "Portfolio",
    },
    {
      text: "Team",
    },
    {
      text: "Contact",
    },
  ];

  return (
    <Wrap>
      <ul>
        {data.map((val) => {
          return (
            <Box text={val.text}>
              <a href="#">{val.text}</a>
            </Box>
          );
        })}
      </ul>
    </Wrap>
  );
};

export default App;
