import { useAnimate, stagger } from "framer-motion";

function App() {
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    animate([
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      [".letter", { y: 0 }, { duration: 0.000001, at: 0.5 }],
    ]);
  };

  return (
    <div ref={scope}>
      <button
        onClick={onButtonClick}
        className="transition-colors text-2xl rounded-full border-2 border-blue-600 px-6 py-2 text-blue-600 hover:bg-blue-100 transition-background"
      >
        <span className="sr-only">Motion</span>
        <span
          className="h-8 overflow-hidden flex items-center justify-center"
          aria-hidden="true"
        >
          {["M", "o", "t", "i", "o", "n"].map((letter, index) => (
            <span
              data-letter={letter}
              className="letter inline-block relative h-8 after:h-8 after:absolute after:left-0 after:top-full after:content-[attr(data-letter)] leading-8"
              key={`${letter}-${index}`}
            >
              {letter}
            </span>
          ))}
        </span>
      </button>
    </div>
  );
}

export default App;
