const HeroCard = ({ card }) => {
  return (
    <div className="card">
      <div className="card-title">
        <span>{card.title[0]}</span>
        <span>{card.title[1]}</span>
      </div>
      <div className="card-title">
        <span>{card.title[1]}</span>
        <span>{card.title[0]}</span>
      </div>
    </div>
  );
};

export default HeroCard;
