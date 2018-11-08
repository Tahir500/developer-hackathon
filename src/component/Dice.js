import React from "react";

const Dice = ({ randomNum, diceNumber, selectePlayer, badtext }) => {
  return (
    <div>
      <div
        onClick={randomNum}
        className={`dice ${diceNumber ? "dice-" + diceNumber : ""}`}
      />
      <div className="dice-turn">
        <h4 id="uselesstext1">Its </h4>
        <h3 id="player" style={{ float: "left", color: selectePlayer }}>
          {selectePlayer}
        </h3>
        <h4 id="uselesstext2">'s turn</h4>
        <p> {badtext}</p>
      </div>
    </div>
  );
};
export default Dice;
