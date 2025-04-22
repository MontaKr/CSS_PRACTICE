import { DecodeEffect } from "./decode-effect/_component/DecodeEffect";

export default function Home() {
  return (
    <div className="h-screen text-5xl font-medium flex justify-center items-center bg-purple-800 uppercase">
      <DecodeEffect duration={1} interval={5} text="Hello World" />
    </div>
  );
}
