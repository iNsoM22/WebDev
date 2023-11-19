import React, { useState } from "react";

const NumberSelect = () => {};
const GamePlay = () => {
  const [currentscore, setCurrentscore] = useState(0);
  return (
    <>
      <wrapper className=" bg-white flex flex-col w-full h-full">
        <headbar className="bg-blue-800 h-2/6 flex justify-between">
          <score className="text-white">
            <h3 className="text-4xl">{currentscore}</h3>
            <h3 className="text-3xl">Total Score</h3>
          </score>
          <choices className="bg-white">
            <ul>
              <li>1</li>
            </ul>
          </choices>
        </headbar>
        <gamebody></gamebody>
      </wrapper>
    </>
  );
};

export default GamePlay;
