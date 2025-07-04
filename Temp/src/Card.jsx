const Card = ({ card }) => {
  return (
    <div className="cards-container">
      <div className="card-wrapper">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-title">
              <span>{card.title[0]}</span>
              <span>{card.title[1]}</span>
            </div>
            <div className="card-title">
              <span>{card.title[1]}</span>
              <span>{card.title[0]}</span>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <div className="card-title">
                <span>{card.title[0]}</span>
                <span>{card.title[1]}</span>
              </div>
              <div className="card-copy">
                {card.content.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div className="card-title">
                <span>{card.title[1]}</span>
                <span>{card.title[0]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
