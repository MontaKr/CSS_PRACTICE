import React, { useEffect, useRef } from 'react'
import { Anchor, GlobalStyle, Wrap } from './styles'

const App = () => {

  // Assign Refs to Anchor Tags
  const anchorRefs = useRef([]);

  const handleAnchorRefs = (el) => {
    if (el && !anchorRefs.current.includes(el)) {
      anchorRefs.current.push(el);
    }
  };

  // Glowing Function
  useEffect(()=>{
    anchorRefs.current.forEach((btn) => {
      btn.onmousemove = (e) => {
        let x = e.pageX - btn.offsetLeft;
        let y = e.pageY - btn.offsetTop;

        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
      };
    });
  },[])

  const buttons = [{color : "#0f0"},{color : "#ff0"},{color : "#f0f"}]

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        {
          buttons.map((val)=>{
            return (
              <Anchor ref={handleAnchorRefs} color={val.color} href="#">
                <span>Button</span>
              </Anchor>
            )
          })
        }
      </Wrap>
    </>
  )
}

export default App