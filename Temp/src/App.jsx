import HeroCard from "./HeroCard";
import Card from "./Card";

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
  return (
    <>
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

      <section className="hero relative w-[100vw] h-[100svh] p-[2rem] overflow-hidden bg-light text-dark">
        <div className="hero-cards absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] flex justify-center gap-[1rem]">
          {cards.map((card, index) => (
            <HeroCard key={index} card={card} index={index} />
          ))}
        </div>
      </section>

      <section className="about relative w-[100vw] h-[100svh] p-[2rem] overflow-hidden flex justify-center items-center bg-dark text-light">
        <h1>Keep scrolling - it gets good</h1>
      </section>

      <section className="services relative w-[100vw] h-[100svh] p-[2rem] overflow-hidden py-[8rem] px-[2rem]">
        <div class="services-header relative w-full text-center translate-y-[400%] will-change-transform">
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
    </>
  );
}

export default App;
