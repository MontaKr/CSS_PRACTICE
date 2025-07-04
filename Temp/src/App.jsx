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

      <section className="hero">
        <div className="hero-cards">
          {cards.map((card, index) => (
            <HeroCard key={index} card={card} />
          ))}
        </div>
      </section>

      <section className="about">
        <h1>Keep scrolling - it gets good</h1>
      </section>

      <section className="services">
        <div class="services-header">
          <h1>Stuff I make so you don't have to</h1>
        </div>
      </section>

      <section className="cards">
        <div className="cards-container">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </section>

      <section className="outro">
        <h1>The story's not over yet</h1>
      </section>
    </>
  );
}

export default App;
