import React, { useState, useEffect } from "react";
import styled from "styled-components";

const App = () => {
  const array = [
    { color: "#ff4d4d", name: "Home" },
    { color: "#c56cf0", name: "About" },
    { color: "#ffeaa7", name: "Services" },
    { color: "#17c0eb", name: "Portfolio" },
    { color: "#fd79a8", name: "Contact" },
  ];

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handler = () => {
      array.forEach(({ name }) => {
        const element = document.getElementById(name.toLowerCase());
        if (
          window.scrollY >= element.offsetTop - 60 &&
          window.scrollY < element.offsetTop - 60 + element.offsetHeight
        ) {
          setActive(name.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [array]);

  const handleClick = (event, id) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Wrap>
      <header>
        <a href="#" className="logo">
          Logo
        </a>
        <nav>
          {array.map(({ name, color }) => {
            return (
              <Box
                key={name}
                color={color}
                href={`#${name.toLowerCase()}`}
                onClick={(e) => handleClick(e, name.toLowerCase())}
                isActive={active === name.toLowerCase()}
              >
                {name}
              </Box>
            );
          })}
        </nav>
      </header>
      {array.map(({ name, color }) => {
        return (
          <Section key={name} color={color} id={name.toLowerCase()}>
            {name}
          </Section>
        );
      })}
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;

  header {
    position: fixed;
    top: 0;
    width: 100%;
    background: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px 0;

    .logo {
      position: relative;
      color: #fff;
      font-size: 2em;
      font-weight: 700;
      text-decoration: none;
    }

    nav {
      display: flex;
      gap: 10px;
    }
  }
`;

const Box = styled.a`
  position: relative;
  text-decoration: none;
  padding: 12px 20px;
  font-weight: 500;
  color: ${({ isActive }) => (isActive ? "#333" : "#fff")};
  background: ${({ isActive, color }) => (isActive ? color : "transparent")};
  border-top-left-radius: ${({ isActive }) => (isActive ? "10px" : "0")};
  border-top-right-radius: ${({ isActive }) => (isActive ? "10px" : "0")};
  scroll-behavior: smooth;

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    bottom: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    border-bottom-right-radius: 20px;
    box-shadow: ${({ isActive, color }) =>
      isActive ? `5px 5px 0 5px ${color}` : "none"};
  }

  &::after {
    content: "";
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    border-bottom-left-radius: 20px;
    box-shadow: ${({ isActive, color }) =>
      isActive ? `-5px 5px 0 5px ${color}` : "none"};
  }
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8em;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  background: ${(props) => props.color};
`;
