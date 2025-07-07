const Card = ({ card, index }) => {
  const delays = [0, 0.25, 0.5];
  const CardFrontAdditionalClasses = ["bg-accent1", "bg-accent2", "bg-accent3"];
  const CardAdditionalClasses = [
    "translate-x-full -translate-y-full -rotate-[5deg] scale-[0.25] z-20",
    "translate-x-[0%] -translate-y-full rotate-0 scale-[0.25] z-10",
    "-translate-x-full -translate-y-full rotate-[5deg] scale-[0.25] z-0",
  ];

  return (
    <div
      className={`card flex-1 relative aspect-[5/7] perspective-[1000px] ${CardAdditionalClasses[index]} opacity-0`}
    >
      <div
        className={`card-wrapper absolute top-1/2 left-1/2  w-full h-full animate-floating `}
        style={{
          animationDelay: `${delays[index]}s`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <div className="flip-card-inner relative w-full h-full [transform-style:preserve-3d]">
          <div
            className={`flip-card-front absolute w-full h-full rounded-[1rem] overflow-hidden p-[1rem] flex flex-col justify-between items-center ${CardFrontAdditionalClasses[index]}`}
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <div className="card-title w-full flex justify-between">
              <span>{card.title[0]}</span>
              <span>{card.title[1]}</span>
            </div>
            <div className="card-title w-full flex justify-between">
              <span>{card.title[1]}</span>
              <span>{card.title[0]}</span>
            </div>
          </div>
          <div className="flip-card-back absolute w-full h-full rounded-[1rem] backface-hidden overflow-hidden p-[1rem] flex flex-col justify-between gap-[2rem] bg-[#FFF] [transform:rotateY(180deg)]">
            <div className="card-title w-full flex justify-between">
              <span>{card.title[0]}</span>
              <span>{card.title[1]}</span>
            </div>
            <div className="card-copy w-full h-full flex flex-col gap-[0.5rem]">
              {card.content.map((item, index) => (
                <p
                  key={index}
                  className="flex-1 flex justify-center items-center text-[1rem] bg-light2 rounded-[0.25rem]"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="card-title w-full flex justify-between">
              <span>{card.title[1]}</span>
              <span>{card.title[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
