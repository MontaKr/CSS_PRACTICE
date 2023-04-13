import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const buttonsRef = useRef(null);

  useEffect(() => {
    const buttons = buttonsRef.current;
    const btn = buttons.querySelectorAll("span");

    const handleClick = (e) => {
      const content = e.target.innerHTML;
      if (content === "=") {
        setValue((prevValue) => eval(prevValue));
      } else {
        if (content === "Clear") {
          setValue("");
        } else {
          setValue((prevValue) => prevValue + content);
        }
      }
    };

    btn.forEach((button) => button.addEventListener("click", handleClick));

    return () => {
      btn.forEach((button) => button.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <Wrap>
      <div className="calculator">
        <div className="buttons" ref={buttonsRef}>
          <h2 id="value">{value}</h2>
          <span id="clear">Clear</span>
          <span>/</span>
          <span>*</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>-</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span id="plus">+</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>0</span>
          <span>00</span>
          <span>.</span>
          <span id="equal">=</span>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #333;

  .calculator {
    position: realte;
    width: 300px;
  }
  .calculator .buttons {
    position: relative;
    display: grid;
  }

  .calculator .buttons #value {
    position: relative;
    left: 8px;
    margin-bottom: 12px;
    grid-column: span 4;
    height: 100px;
    line-height: 100px;
    padding: 0 20px;
    border-radius: 10px;
    background: #a7af7c;
    text-align: right;
    font-size: 1.5em;
    color: #3a3c2e;
    overflow: hidden;
    box-shadow: inset 0 6px 1px 0 rgba(0, 0, 0, 0.35),
      0 5px 5px rgba(0, 0, 0, 0.5), 0 15px 25px rgba(0, 0, 0, 0.35);
    user-select: none;
    width: calc(100% - 55px);
  }

  .calculator .buttons #value::before {
    content: "";
    position: absolute;
    inset: 5px 3px;
    border-top: 1px solid #ccc;
    filter: blur(2px);
  }

  .calculator .buttons span {
    position: relative;
    padding: 10px;
    margin: 6px;
    min-width: 40px;
    font-size: 1.1em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    border: 2px solid #222;
    border-radius: 6px;
    background: linear-gradient(#555353, #363535);
    box-shadow: inset 0 6px 1px 0 rgba(0, 0, 0, 0.35),
      0 5px 5px rgba(0, 0, 0, 0.5), 0 15px 25px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    user-select: none;
  }

  .calculator .buttons span::before {
    content: "";
    position: absolute;
    inset: 5px 3px;
    border-top: 1px solid #ccc;
    filter: blur(2px);
  }

  .calculator .buttons span:active {
    box-shadow: inset 0 2px 2px 0 rgba(0, 0, 0, 0.35),
      inset 0 5px 15px rgba(0, 0, 0, 0.5), inset 0 15px 25px rgba(0, 0, 0, 0.35);
    color: #fff;
    text-shadow: 0 0 5px #219cf3, 0 0 8px #219cf3;
  }

  .calculator .buttons span#clear {
    grid-column: span 2;
    background: #f44336;
    color: #fff;
  }

  .calculator .buttons span#plus {
    grid-row: span 2;
    background: #31a935;
    color: #fff;
  }

  .calculator .buttons span#equal {
    background: #2196f3;
    color: #fff;
  }
`;
