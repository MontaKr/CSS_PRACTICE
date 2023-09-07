import React, { useEffect } from "react";
import { GlobalStyle, Wrap } from "./styles";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const App = () => {
  //lenis setting, GSAP
  useEffect(() => {
    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animated-element",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    });

    tl.to(".animated-element", {
      x: 800,
    });

    lenis.on("scroll", (e) => {
      gsap.set(".container", { y: -e.scrollY });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <div className="spacer"></div>
        <div className="spacer">
          <div className="animated-element">
            <h2>Animate me</h2>
            <p>
              This is a simple card with a title and a description. It will
              animate as we scroll
            </p>
          </div>
        </div>
        <div className="spacer"></div>
      </Wrap>
    </>
  );
};

export default App;
