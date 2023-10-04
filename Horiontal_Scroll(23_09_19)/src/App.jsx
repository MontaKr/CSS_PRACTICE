import React, { useEffect } from "react";
import { Globalstyle, Wrap } from "./styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray(".container section");

    const mask = document.querySelector(".mask");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=3000",
      },
    });

    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1,
      },
    });

    sections.forEach((section) => {
      let text = section.querySelectorAll(".anim");

      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          // markers: true
        },
      });
    });
  }, []);

  return (
    <>
      <Globalstyle />
      <Wrap>
        <div className="wrapper">
          <div className="container scrollx">
            <svg
              viewBox="0 0 900 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                fill="#D9D9D9"
              />
              <mask
                id="mask0_0_1"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="900"
                height="10"
              >
                <path
                  d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_0_1)">
                <rect className="mask" y="-49" height="99" fill="black" />
              </g>
            </svg>
            <section className="sec1 pin">
              <span>Advanced</span>
              <h1>Signify Elegance</h1>

              <div className="col">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
              </div>
            </section>
            <section className="sec2 pin">
              <span className="anim">Advanced</span>
              <h1 className="anim">Signify Elegance</h1>

              <div className="col anim">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
              </div>
            </section>
            <section className="sec3 pin">
              <span className="anim">Advanced</span>
              <h1 className="anim">Signify Elegance</h1>
              <div className="col anim">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Wrap>
    </>
  );
};

export default App;
