import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

import HeroCard from "./HeroCard";
import Card from "./Card";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const cards = [
  {
    title: ["Plan", "01"],
    content: [
      "Discovery",
      "Audit",
      "User Flow",
      "Site Map",
      "Personas",
      "Strategy",
    ],
  },
  {
    title: ["Design", "02"],
    content: [
      "Wireframes",
      "UI Kits",
      "Prototypes",
      "Visual Style",
      "Interaction",
      "Design QA",
    ],
  },
  {
    title: ["Develop", "03"],
    content: [
      "HTML/CSS/JS",
      "CMS Build",
      "GSAP Motion",
      "Responsive",
      "Optimization",
      "Launch",
    ],
  },
];

function App() {
  const container = useRef();
  const hero = useRef();
  const heroCards = useRef();
  const heroCard = useRef([]);

  // 부드러운 애니메이션
  const smoothStep = (p) => p * p * (3 - 2 * p);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: hero.current,
        start: "top top",
        end: "75% top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // 0~1인 progress값을 1~0.5로 변환
          const heroCardsContainerOpacity = gsap.utils.interpolate(
            1,
            0.5,
            smoothStep(progress)
          );

          gsap.set(heroCards.current, {
            opacity: heroCardsContainerOpacity,
          });

          heroCard.current.forEach((card, index) => {
            const delay = index * 0.9;
            const cardProgress = gsap.utils.clamp(
              0,
              1,
              (progress - delay * 0.1) / (1 - delay * 0.1)
            );

            const y = gsap.utils.interpolate(
              "0%",
              "350%",
              smoothStep(cardProgress)
            );

            const scale = gsap.utils.interpolate(
              1,
              0.75,
              smoothStep(cardProgress)
            );

            let x = "0%";
            let rotation = 0;

            if (index === 0) {
              x = gsap.utils.interpolate("0%", "90%", smoothStep(cardProgress));
              rotation = gsap.utils.interpolate(
                0,
                -15,
                smoothStep(cardProgress)
              );
            } else if (index === 2) {
              x = gsap.utils.interpolate(
                "0%",
                "-90%",
                smoothStep(cardProgress)
              );
              rotation = gsap.utils.interpolate(
                0,
                15,
                smoothStep(cardProgress)
              );
            }

            gsap.set(card, {
              y: y,
              x: x,
              rotation: rotation,
              scale: scale,
            });
          });
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <ReactLenis root />
      <div className="container" ref={container}>
        <nav>
          <div className="logo">
            <span className="text-[0.8rem] p-[0.75rem] rounded-[0.25rem] bg-dark text-light">
              Site Logo
            </span>
          </div>
          <div className="menu-btn">
            <span className="text-[0.8rem] p-[0.75rem] rounded-[0.25rem] bg-light2 text-dark">
              Menu
            </span>
          </div>
        </nav>

        <section
          ref={hero}
          className="hero relative w-[100vw] h-[100svh] p-[2rem] overflow-hidden bg-light text-dark"
        >
          <div
            ref={heroCards}
            className={
              "hero-cards absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] flex justify-center gap-[1rem] " +
              "max-bk:w-[calc(100%-4rem)] "
            }
          >
            {cards.map((card, index) => (
              <HeroCard
                key={index}
                card={card}
                index={index}
                ref={(el) => (heroCard.current[index] = el)}
              />
            ))}
          </div>
        </section>

        <section className="about relative w-[100vw] h-[100svh] p-[2rem] overflow-hidden flex justify-center items-center bg-dark text-light">
          <h1>Keep scrolling - it gets good</h1>
        </section>

        <section
          className={
            "services relative w-[100vw] h-[100svh] p-[2rem] overflow-hidden py-[8rem] px-[2rem] " +
            "max-bk:min-h-[100svh] max-bk:h-[100%] "
          }
        >
          <div
            className={
              "services-header relative w-full text-center translate-y-[400%] will-change-transform " +
              "translate-y-0 "
            }
          >
            <h1>Stuff I make so you don't have to</h1>
          </div>
        </section>

        <section className="cards fixed top-0 left-0 w-screen h-[100svh] flex justify-center -z-10 bg-light ">
          <div className="cards-container relative w-[75%] h-full flex justify-center items-center gap-[4rem] ">
            {cards.map((card, index) => (
              <Card key={index} card={card} index={index} />
            ))}
          </div>
        </section>

        <section className="outro relative w-[100vw] h-[100svh] p-[2rem] overflow-hidden flex justify-center items-center bg-dark text-light">
          <h1>The story's not over yet</h1>
        </section>
      </div>
    </>
  );
}

export default App;
