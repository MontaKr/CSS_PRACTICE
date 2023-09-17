import React from "react";
import { useRef, useState } from "react";
import { GlobalStyle, Wrap } from "./styles";
import { HomeOutline } from "react-ionicons";
import { PersonOutline } from "react-ionicons";
import { ChatboxOutline } from "react-ionicons";
import { CameraOutline } from "react-ionicons";
import { ConstructOutline } from "react-ionicons";

const App = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const navigationRef = useRef(null);

  const toggleHandle = () => {
    navigationRef.current.classList.toggle("active");
  };

  console.log(activeLink);

  const links = [
    {
      name: "Home",
      icon: <HomeOutline color={activeLink === "Home" ? "#fff" : "#000"} />,
      color: "#f44336",
    },
    {
      name: "About",
      icon: <PersonOutline color={activeLink === "About" ? "#fff" : "#000"} />,
      color: "#ffa117",
    },
    {
      name: "Messages",
      icon: (
        <ChatboxOutline color={activeLink === "Messages" ? "#fff" : "#000"} />
      ),
      color: "#0fc70f",
    },
    {
      name: "Photos",
      icon: <CameraOutline color={activeLink === "Photos" ? "#fff" : "#000"} />,
      color: "#2196f3",
    },
    {
      name: "Settings",
      icon: (
        <ConstructOutline color={activeLink === "Settings" ? "#fff" : "#000"} />
      ),
      color: "#b145e9",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Wrap activeColor={links.find((link) => link.name === activeLink).color}>
        <div ref={navigationRef} className="navigation">
          <ul>
            {links.map((val, idx) => {
              return (
                <li
                  key={idx}
                  className={`list ${activeLink === val.name ? "active" : ""}`}
                  onClick={() => setActiveLink(val.name)}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <span className="icon">{val.icon}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Wrap>
    </>
  );
};

export default App;
