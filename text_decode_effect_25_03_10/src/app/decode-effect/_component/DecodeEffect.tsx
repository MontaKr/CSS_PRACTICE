"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const DecodeEffect = ({
  text,
  duration,
  interval,
}: {
  text: string;
  duration: number;
  interval: number;
}) => {
  const textRef = useRef(null);
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const [scrambleText, setScrambleText] = useState<string>("");

  useEffect(() => {
    const runScrambleEffect = () => {
      let obj = { progress: 0 };

      gsap.to(obj, {
        progress: 1,
        duration: 2,
        ease: "power4.out",
        onUpdate: () => {
          setScrambleText(() =>
            text
              .split("")
              .map((char, i) =>
                obj.progress < 1
                  ? chars[Math.floor(Math.random() * chars.length)]
                  : char
              )
              .join("")
          );
        },
        onComplete: () => {
          setScrambleText(text);
        },
      });
    };

    runScrambleEffect();

    const intervalId = setInterval(runScrambleEffect, interval * 1000);

    return () => clearInterval(intervalId);
  }, [text, duration, interval]);

  return <h1 ref={textRef}>{scrambleText}</h1>;
};
