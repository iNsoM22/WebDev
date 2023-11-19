import React from "react";
import "./App.css";
import HomePage from "./screens/HomePage";
import GamePlay from "./screens/GamePlay";

const App = () => {
  return (
    <div className=" w-screen h-screen bg-black">
      <GamePlay />
    </div>
  );
};

export default App;
