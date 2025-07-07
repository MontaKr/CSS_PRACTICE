const HeroCard = ({ card, index }) => {
  const backgroundClasses = [
    "bg-accent1 origin-top-right z-20",
    "bg-accent2 z-10",
    "bg-accent3 origin-top-left z-0",
  ];

  return (
    <div
      className={`card flex-1 relative aspect-[5/7] p-[0.75rem] rounded-[0.5rem] flex flex-col justify-between ${
        backgroundClasses[index] || ""
      }`}
    >
      <div className="card-title w-full flex justify-between">
        <span className="text-[0.7rem]">{card.title[0]}</span>
        <span className="text-[0.7rem]">{card.title[1]}</span>
      </div>
      <div className="card-title w-full flex justify-between">
        <span className="text-[0.7rem]">{card.title[1]}</span>
        <span className="text-[0.7rem]">{card.title[0]}</span>
      </div>
    </div>
  );
};

export default HeroCard;
