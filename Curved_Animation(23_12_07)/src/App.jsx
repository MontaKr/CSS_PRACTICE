import React, { useState } from "react";
import { GlobalStyle, Wrap } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPenToSquare,
  faClone,
  faLink,
  faRss,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const array = [
    { label: "tap1", icon: faHouse, text: "Home" },
    { label: "tap2", icon: faPenToSquare, text: "Edit" },
    { label: "tap3", icon: faClone, text: "Components" },
    { label: "tap4", icon: faLink, text: "Links" },
    { label: "tap5", icon: faRss, text: "Feed" },
  ];

  const inputArray = [
    { id: "tap1" },
    { id: "tap2" },
    { id: "tap3" },
    { id: "tap4" },
    { id: "tap5" },
  ];

  const [selectedTab, setSelectedTab] = useState("tap1");

  const handleChange = (event) => {
    setSelectedTab(event.target.id);
  };

  const getSliderStyle = () => {
    switch (selectedTab) {
      case "tap1":
        return { width: "135px", transform: "translateX(0)" };
      case "tap2":
        return { width: "110px", transform: "translateX(150px)" };
      case "tap3":
        return { width: "210px", transform: "translateX(275px)" };
      case "tap4":
        return { width: "120px", transform: "translateX(505px)" };
      case "tap5":
        return { width: "130px", transform: "translateX(640px)" };
      default:
        return {};
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrap>
        {inputArray.map((val, idx) => {
          return (
            <input
              key={val.id}
              type="radio"
              id={val.id}
              name="tap"
              checked={selectedTab === val.id}
              onChange={handleChange}
            />
          );
        })}
        <nav>
          <div className="logo">LOGO</div>
          <ol>
            {array.map((val, idx) => {
              return (
                <li key={val.label}>
                  <label htmlFor={val.label}>
                    <a
                      style={{
                        color:
                          selectedTab === val.label ? "#66ff00" : "#002222",
                      }}
                    >
                      <FontAwesomeIcon icon={val.icon} />
                      {val.text}
                    </a>
                  </label>
                </li>
              );
            })}
            <div className="slider" style={getSliderStyle()}></div>
          </ol>
        </nav>
      </Wrap>
    </>
  );
};

export default App;
