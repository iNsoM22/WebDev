import React from "react";
import dice from "../assests/dices.png";

const Background = () => {
  return (
    <div className="bg-cover max-w-full max-h-full">
      <img src={dice} alt="Dice Logo" className="max-w-full" />
    </div>
  );
};

export default Background;
