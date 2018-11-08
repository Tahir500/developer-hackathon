import React, { Component } from "react";
import Dice from "./Dice";
import { onboard, positions } from "./constants";
import { Board } from "./Board";
import { Pawn } from "./Pawn";
import range from "lodash/range";
class Ludo extends Component {
  state = {
    currPos: 0,
    step: 49.5,
    currcolor: "",
    NumOfPaw: "",
    clicked: false,
    currpawn: "",
    diceNumber: 0,
    allcolor: ["red", "blue", "green", "yellow"],
    pawnOut: { red: 0, blue: 0, green: 0, yellow: 0 },
    badtext: "",
    selectePlayer: "red",
    stepsRed: [],
    stepsYellow: [],
    stepsBlue: [],
    stepsGreen: []
  };
  randomNum = () => {
    const { clicked } = this.state;
    if (!clicked) {
      const randomNum = Math.floor(Math.random() * 6 + 1);
      this.setState({ diceNumber: randomNum, clicked: true }, () => {
        this.validateNumber();
      });
    } else {
      this.validateNumber();
    }
  };

  validateNumber = () => {
    const { diceNumber } = this.state;
    if (diceNumber != 6) {
      this.setState({ badtext: "Unfortunatlly you stuck", clicked: false });
      setTimeout(() => {
        this.changePlayer();
      }, 1000);
    }
  };

  Stuck = ({ currpawn, currPos, diceNumber }) => {
    if (onboard[currpawn] == 0 || currPos + diceNumber > 44) {
      if (this.DontHaveOtherFree() || currPos + diceNumber > 44) {
        var badtext = document.getElementById("badtext");
        badtext.innerText = "Unfortunatlly you stuck";
        this.setState({
          clicked: false
        });
        var dice = document.getElementById("dice");
        dice.style.backgroundImage = "url(Images/dice.gif)";
        setTimeout(() => this.changePlayer, 1000);
      }
    }
  };

  changePlayer = () => {
    const { selectePlayer } = this.state;
    const nextperson = {
      red: "blue",
      blue: "yellow",
      yellow: "green",
      green: "red"
    };
    this.setState({
      badtext: "",
      diceNumber: 0,
      selectePlayer: nextperson[selectePlayer]
    });
  };

  render() {
    const { diceNumber, badtext, selectePlayer } = this.state;
    return (
      <div className="ludo-wrapper">
        <div className="main">
          <Board />
          <Dice
            randomNum={this.randomNum}
            diceNumber={diceNumber}
            selectePlayer={selectePlayer}
            badtext={badtext}
          />
          {range(4).map((item, index) => (
            <Pawn pawnNumber={index} pawnColor="red" />
          ))}
          {range(4).map((item, index) => (
            <Pawn pawnNumber={index} pawnColor="yellow" />
          ))}
          {range(4).map((item, index) => (
            <Pawn pawnNumber={index} pawnColor="green" />
          ))}
          {range(4).map((item, index) => (
            <Pawn pawnNumber={index} pawnColor="blue" />
          ))}
        </div>
      </div>
    );
  }
}
export default Ludo;
