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

  pushSteps = (value, steps, count) => {
    console.log(value, steps, count);
    for (let i = 0; i < count; i++) steps.push(value);
  };
  //Red pawns path
  componentDidMount() {
    const { stepDown, stepLeft, stepRight, stepUp, pushSteps } = this;
    const { stepsRed, stepsGreen, stepsYellow, stepsBlue } = this.state;
    console.log("red");
    pushSteps(stepDown, stepsRed, 4);
    pushSteps(stepRight, stepsRed, 4);
    pushSteps(stepDown, stepsRed, 2);
    pushSteps(stepLeft, stepsRed, 4);
    pushSteps(stepDown, stepsRed, 4);
    pushSteps(stepLeft, stepsRed, 2);
    pushSteps(stepUp, stepsRed, 4);
    pushSteps(stepLeft, stepsRed, 4);
    pushSteps(stepUp, stepsRed, 2);
    pushSteps(stepRight, stepsRed, 4);
    pushSteps(stepUp, stepsRed, 4);
    pushSteps(stepRight, stepsRed, 1);
    pushSteps(stepDown, stepsRed, 5);
    //Yellow pawns path
    console.log("yellow");

    pushSteps(stepUp, stepsYellow, 4);
    pushSteps(stepLeft, stepsYellow, 4);
    pushSteps(stepUp, stepsYellow, 2);
    pushSteps(stepRight, stepsYellow, 4);
    pushSteps(stepUp, stepsYellow, 4);
    pushSteps(stepRight, stepsYellow, 2);
    pushSteps(stepDown, stepsYellow, 4);
    pushSteps(stepRight, stepsYellow, 4);
    pushSteps(stepDown, stepsYellow, 2);
    pushSteps(stepLeft, stepsYellow, 4);
    pushSteps(stepDown, stepsYellow, 4);
    pushSteps(stepLeft, stepsYellow, 1);
    pushSteps(stepUp, stepsYellow, 5);
    console.log("blue");

    //Blue pawns path
    pushSteps(stepLeft, stepsBlue, 4);
    pushSteps(stepDown, stepsBlue, 4);
    pushSteps(stepLeft, stepsBlue, 2);
    pushSteps(stepUp, stepsBlue, 4, 2);
    pushSteps(stepLeft, stepsBlue, 4);
    pushSteps(stepUp, stepsBlue, 2);
    pushSteps(stepRight, stepsBlue, 4);
    pushSteps(stepUp, stepsBlue, 4);
    pushSteps(stepRight, stepsBlue, 2);
    pushSteps(stepDown, stepsBlue, 4);
    pushSteps(stepRight, stepsBlue, 4);
    pushSteps(stepDown, stepsBlue, 1);
    pushSteps(stepLeft, stepsBlue, 5);
    console.log("green");

    //Green pawns path
    pushSteps(stepRight, stepsGreen, 4);
    pushSteps(stepUp, stepsGreen, 4);
    pushSteps(stepRight, stepsGreen, 2);
    pushSteps(stepDown, stepsGreen, 4);
    pushSteps(stepRight, stepsGreen, 4);
    pushSteps(stepDown, stepsGreen, 2);
    pushSteps(stepLeft, stepsGreen, 4);
    pushSteps(stepDown, stepsGreen, 4);
    pushSteps(stepLeft, stepsGreen, 2);
    pushSteps(stepUp, stepsGreen, 4);
    pushSteps(stepLeft, stepsGreen, 4);
    pushSteps(stepUp, stepsGreen, 1);
    pushSteps(stepRight, stepsGreen, 5);
  }
  stepDown = () => {
    const { currcolor, NumOfPaw, currPos, step } = this.state;
    var doc = document.getElementById(currcolor + "pawn" + NumOfPaw);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ""));
    doc.style.top = curr + step + "px";
    this.setState({ currPos: currPos + 1 });
  };
  stepUp = () => {
    const { currpawn, currPos, step } = this.state;

    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ""));
    doc.style.top = curr - step + "px";
    this.setState({ currPos: currPos + 1 });
  };
  stepLeft = () => {
    const { currpawn, currPos, step } = this.state;

    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ""));
    doc.style.left = curr - step + "px";
    currPos++;
    this.setState({ currPos: currPos + 1 });
  };
  stepRight = () => {
    const { currpawn, currPos, step } = this.state;

    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ""));
    doc.style.left = curr + step + "px";
    currPos++;
    this.setState({ currPos: currPos + 1 });
  };

  validateNumber = () => {
    const { diceNumber } = this.state;
    if (diceNumber != 6 && this.DontHaveOtherFree()) {
      this.setState({ badtext: "Unfortunatlly you stuck", clicked: false });
      setTimeout(() => {
        this.changePlayer();
      }, 1000);
    }
  };

  DontHaveOtherFree = () => {
    const { diceNumber } = this.state;
    var text = document.getElementById("player");
    for (var i = 1; i <= 4; i++) {
      if (
        onboard[text.innerText + "pawn" + i] == 1 ||
        positions[text.innerText + "pawn" + i] + diceNumber >= 44
      )
        return false;
    }
    return true;
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
  ResetPawn = victim => {
    onboard[victim] = 0;
    positions[victim] = 0;
    var pawnToMove = document.getElementById(victim);
    switch (victim) {
      case "redpawn1":
        pawnToMove.style.top = 149 + "px";
        pawnToMove.style.left = 442 + "px";
        break;
      case "redpawn2":
        pawnToMove.style.top = 102 + "px";
        pawnToMove.style.left = 395 + "px";
        break;
      case "redpawn3":
        pawnToMove.style.top = 55 + "px";
        pawnToMove.style.left = 442 + "px";
        break;
      case "redpawn4":
        pawnToMove.style.top = 102 + "px";
        pawnToMove.style.left = 490 + "px";
        break;
      case "bluepawn1":
        pawnToMove.style.top = 451 + "px";
        pawnToMove.style.left = 490 + "px";
        break;
      case "bluepawn2":
        pawnToMove.style.top = 451 + "px";
        pawnToMove.style.left = 395 + "px";
        break;
      case "bluepawn3":
        pawnToMove.style.top = 404 + "px";
        pawnToMove.style.left = 442 + "px";
        break;
      case "bluepawn4":
        pawnToMove.style.top = 498 + "px";
        pawnToMove.style.left = 442 + "px";
        break;
      case "greenpawn1":
        pawnToMove.style.top = 149 + "px";
        pawnToMove.style.left = 93 + "px";
        break;
      case "greenpawn2":
        pawnToMove.style.top = 102 + "px";
        pawnToMove.style.left = 140 + "px";
        break;
      case "greenpawn3":
        pawnToMove.style.top = 55 + "px";
        pawnToMove.style.left = 93 + "px";
        break;
      case "greenpawn4":
        pawnToMove.style.top = 102 + "px";
        pawnToMove.style.left = 47 + "px";
        break;
      case "yellowpawn1":
        pawnToMove.style.top = 451 + "px";
        pawnToMove.style.left = 47 + "px";
        break;
      case "yellowpawn2":
        pawnToMove.style.top = 451 + "px";
        pawnToMove.style.left = 140 + "px";
        break;
      case "yellowpawn3":
        pawnToMove.style.top = 404 + "px";
        pawnToMove.style.left = 93 + "px";
        break;
      case "yellowpawn4":
        pawnToMove.style.top = 498 + "px";
        pawnToMove.style.left = 93 + "px";
        break;
      default:
        return null;
    }
  };
  HaveHover = () => {
    const { allcolor, currcolor, currpawn, diceNumber, currPos } = this.state;
    var count = 0;
    var toKill = "";
    for (var i = 0; i < allcolor.length; i++) {
      for (var n = 1; n <= 4; n++) {
        var firstPawn = document.getElementById(allcolor[i] + "pawn" + n);
        var secondPawn = document.getElementById(currpawn);
        if (
          firstPawn.style.top == secondPawn.style.top &&
          firstPawn.style.left == secondPawn.style.left &&
          currcolor != allcolor[i] &&
          currPos + diceNumber < 44
        ) {
          count++;
          toKill = allcolor[i] + "pawn" + n;
          return toKill;
        }
      }
    }
    return false;
  };
  randomMove = (Color, paw) => {
    const {
      selectePlayer,
      diceNumber,
      clicked,
      stepsRed,
      stepsYellow,
      stepsBlue,
      stepsGreen,
      pawnOut
    } = this.state;
    const NumOfPaw = paw;
    const currcolor = Color;
    const currpawn = currcolor + "pawn" + NumOfPaw;
    const currPos = positions[currpawn];
    this.setState({
      NumOfPaw,
      currcolor,
      currpawn,
      currPos
    });
    if (diceNumber + currPos > 44) {
      this.Stuck({ currpawn, currPos, diceNumber });
    } else {
      if (clicked) {
        var position = currPos;
        if (selectePlayer == currcolor) {
          if (onboard[currpawn] === 1 || diceNumber === 6) {
            if (onboard[currpawn] === 0) {
              var doc = document.getElementById(currpawn);
              var curr = Number(doc.style.left.replace(/[a-z]/g, ""));
              switch (Color) {
                case "red":
                  doc.style.left = 318 + "px";
                  doc.style.top = 28 + "px";
                  break;

                case "yellow":
                  doc.style.left = 219 + "px";
                  doc.style.top = 523 + "px";
                  break;

                case "blue":
                  doc.style.left = 516 + "px";
                  doc.style.top = 325 + "px";
                  break;

                case "green":
                  doc.style.left = 21 + "px";
                  doc.style.top = 226 + "px";
                  break;
                default:
                  return;
              }
              onboard[currpawn] = 1;
            } else {
              switch (Color) {
                case "red":
                  for (var i = currPos; i < position + diceNumber; i++) {
                    stepsRed[i]();
                  }
                  break;

                case "yellow":
                  for (var i = currPos; i < position + diceNumber; i++) {
                    stepsYellow[i]();
                  }
                  break;

                case "blue":
                  for (var i = currPos; i < position + diceNumber; i++) {
                    stepsBlue[i]();
                  }
                  break;

                case "green":
                  for (var i = currPos; i < position + diceNumber; i++) {
                    stepsGreen[i]();
                  }
                  break;
                default:
                  return;
              }
              positions[currpawn] = currPos;
              var victim = this.HaveHover();
              if (victim != false) {
                this.ResetPawn(victim);
              }
              if (currPos == 44) {
                pawnOut[currcolor]++;
                onboard[currpawn] = 0;
                positions[currpawn] = 0;
                document.getElementById(currpawn).style.visibility = "hidden";
              }
              this.CheckForWinner();
              this.changePlayer();
            }
            this.setState({
              diceNumber: 0,
              clicked: false
            });
          } else this.Stuck({ currpawn, currPos, diceNumber });
        }
      }
    }
  };
  CheckForWinner = () => {
    const { pawnOut, currcolor } = this.state;
    if (pawnOut[currcolor] == 4) {
      var dice = document.getElementById("dice");
      var player = document.getElementById("player");
      var uselesstext1 = document.getElementById("uselesstext1");
      var uselesstext2 = document.getElementById("uselesstext2");
      dice.innerText = "";
      dice.style.visibility = "hidden";
      uselesstext1.innerText = "";
      uselesstext2.innerText = "";
      player.innerText = "The Winner is the " + currcolor + " player";
    }
  };
  render() {
    const { diceNumber, badtext, selectePlayer } = this.state;
    return (
      <div className="ludo-wrapper">
        <div id="main">
          <div id="board" />
          <Dice
            randomNum={this.randomNum}
            diceNumber={diceNumber}
            selectePlayer={selectePlayer}
            badtext={badtext}
          />
          <div className="pawns red redpawn1" />
          <div className="pawns red redpawn2" />
          <div className="pawns red redpawn3" />
          <div className="pawns red redpawn4" />

          <div className="pawns yellow yellowpawn1" />
          <div className="pawns yellow yellowpawn2" />
          <div className="pawns yellow yellowpawn3" />
          <div className="pawns yellow yellowpawn4" />
          <div className="pawns green greenpawn1" />
          <div className="pawns green greenpawn2" />
          <div className="pawns green greenpawn3" />
          <div className="pawns green greenpawn4" />
          <div className="pawns blue bluepawn1" />
          <div className="pawns blue bluepawn2" />
          <div className="pawns blue bluepawn3" />
          <div className="pawns blue bluepawn4" />
        </div>
      </div>
    );
  }
}
export default Ludo;
