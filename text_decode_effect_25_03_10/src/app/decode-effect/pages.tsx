import { DecodeEffect } from "./_component/DecodeEffect";

const page = () => {
  return (
    <div className="h-screen text-9xl font-medium flex justify-center items-center bg-purple-800 uppercase">
      <DecodeEffect duration={1} interval={5} text="Green Sock animation" />
    </div>
  );
};

export default page;
