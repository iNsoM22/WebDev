import React, { useState } from "react";
import Background from "../components/Background";

const HomePage = () => {
  const [isgamestarted, setIsgamestarted] = useState(false);

  const toggleGameplay = (e) => {
    e.preventDefault();
    setIsgamestarted((prev) => !prev);
    console.log(isgamestarted);
  };
  return (
    <>
      <wrapper className="h-full flex justify-center items-center">
        <div className="grid grid-cols-2 gap-40 box-border border-white border-x-2 border-y-2 bg-black items-center max-h-full">
          <Background />
          <div className="text-white box-content ">
            <h1 className=" text-8xl font-bold pb-3 whitespace-nowrap">
              Dice Game
            </h1>
            <button
              onClick={toggleGameplay}
              className=" text-base self-center bg-slate-500 w-60 pb-3 pt-3 rounded font-semibold hover:bg-slate-400 active:translate-y-0.5"
            >
              Play Now
            </button>
          </div>
        </div>
      </wrapper>
    </>
  );
};

export default HomePage;
