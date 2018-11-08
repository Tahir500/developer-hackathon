import React, { Component } from "react";
import Dice from "./Dice";
import { onboard, positions } from "./constants";
class Ludo extends Component {
  state = {
    currPos: 0,
    step: 49.5,
    currcolor: "",
    NumOfPaw: "",
    clicked: false,
    currpawn: "",
    num: 0,
    allcolor: ["red", "blue", "green", "yellow"],
    pawnOut: { red: 0, blue: 0, green: 0, yellow: 0 }
  };
  randomNum = event => {
    const { clicked, num } = this.state;
    if (!clicked) {
      const num = Math.floor(Math.random() * 6 + 1);
      this.setState({ num });
      // dice.style.backgroundImage = "url(Images/" + num + ".jpg)";
      clicked = true;
    }
    if (num != 6 && this.DontHaveOtherFree()) {
      var bad = document.getElementById("badtext");
      bad.innerText = "Unfortunatlly you stuck";
      window.setTimeout(this.changePlayer(), 1000);
      clicked = false;
    }
  };
  DontHaveOtherFree = () => {
    const { num } = this.state;
    var text = document.getElementById("player");
    for (var i = 1; i <= 4; i++) {
      if (
        onboard[text.innerText + "pawn" + i] == 1 ||
        positions[text.innerText + "pawn" + i] + num >= 44
      )
        return false;
    }
    return true;
  };
  changePlayer = () => {
    const { num } = this.state;
    if (num != 6) {
      var text = document.getElementById("player");
      switch (text.innerText) {
        case "red":
          text.innerText = text.style.color = "blue";
          break;
        case "blue":
          text.innerText = text.style.color = "yellow";
          break;
        case "yellow":
          text.innerText = text.style.color = "green";
          break;
        case "green":
          text.innerText = text.style.color = "red";
          break;
      }
    }
    var badtext = document.getElementById("badtext");
    badtext.innerText = "";
    var dice = document.getElementById("dice");
    dice.style.backgroundImage = "url(Images/dice.gif)";
  };
  render() {
    return (
      <div className="ludo-wrapper">
        <div id="main">
          <div id="board" />
          <Dice randomNum={this.randomNum} />
          {/* <div className="pawns red redpawn1" onClick="randomMove('red',1)" />
          <div className="pawns red redpawn2" onClick="randomMove('red',2)" />
          <div className="pawns red redpawn3" onClick="randomMove('red',3)" />
          <div className="pawns red redpawn4" onClick="randomMove('red',4)" /> */}
          {/* <div
            className="pawns yellow yellowpawn1"
            onClick="randomMove('yellow',1)"
          />
          <div
            className="pawns yellow yellowpawn2"
            onClick="randomMove('yellow',2)"
          />
          <div
            className="pawns yellow yellowpawn3"
            onClick="randomMove('yellow',3)"
          />
          <div
            className="pawns yellow yellowpawn4"
            onClick="randomMove('yellow',4)"
          />
          <div
            className="pawns green greenpawn1"
            onClick="randomMove('green',1)"
            style={{ top: "149px", left: "93px" }}
          />
          <div
            className="pawns green greenpawn2"
            onClick="randomMove('green',2)"
          />
          <div
            className="pawns green greenpawn3"
            onClick="randomMove('green',3)"
          />
          <div
            className="pawns green greenpawn4"
            onClick="randomMove('green',4)"
          />
          <div
            className="pawns blue bluepawn1"
            onClick="randomMove('blue',1)"
          />
          <div
            className="pawns blue bluepawn2"
            onClick="randomMove('blue',2)"
          />
          <div
            className="pawns blue bluepawn3"
            onClick="randomMove('blue',3)"
          />
          <div
            className="pawns blue bluepawn4"
            onClick="randomMove('blue',4)"
          />
          <h4 id="uselesstext1">It`s </h4>
          <h3 id="player" style={{ float: "left", color: "#ff6969" }}>
            red
          </h3>
          <h4 id="uselesstext2">s turn</h4>
          <p id="badtext" style={{ float: "left" }} /> */}
        </div>
      </div>
    );
  }
}
export default Ludo;
