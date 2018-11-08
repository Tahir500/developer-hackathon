import React, { Component } from "react";

class Ludo extends Component {
  render() {
    return (
      <div className="ludo-wrapper">
        <div id="main">
          <div id="board" />
          <div id="dice" onclick="randomNum()" className="dice" />
          {/* <!-- red pawns  start top 28 left 318--> */}
          <div className="pawns red redpawn1" onclick="randomMove('red',1)" />
          <div className="pawns red redpawn2" onclick="randomMove('red',2)" />
          <div className="pawns red redpawn3" onclick="randomMove('red',3)" />
          <div className="pawns red redpawn4" onclick="randomMove('red',4)" />
          {/* <!-- yellow pawns  start top 523 left 218--> */}
          <div
            className="pawns yellow yellowpawn1"
            onclick="randomMove('yellow',1)"
          />
          <div
            className="pawns yellow yellowpawn2"
            onclick="randomMove('yellow',2)"
          />
          <div
            className="pawns yellow yellowpawn3"
            onclick="randomMove('yellow',3)"
          />
          <div
            className="pawns yellow yellowpawn4"
            onclick="randomMove('yellow',4)"
          />
          {/* <!-- green pawns  start top 227 left 22--> */}
          <div
            className="pawns green greenpawn1"
            onclick="randomMove('green',1)"
          />
          <div
            className="pawns green greenpawn2"
            onclick="randomMove('green',2)"
          />
          <div
            className="pawns green greenpawn3"
            onclick="randomMove('green',3)"
          />
          <div
            className="pawns green greenpawn4"
            onclick="randomMove('green',4)"
          />
          {/* <!-- blue pawns  start top 326 left 515--> */}
          <div
            className="pawns blue bluepawn1"
            onclick="randomMove('blue',1)"
          />
          <div
            className="pawns blue bluepawn2"
            onclick="randomMove('blue',2)"
          />
          <div
            className="pawns blue bluepawn3"
            onclick="randomMove('blue',3)"
          />
          <div
            className="pawns blue bluepawn4"
            onclick="randomMove('blue',4)"
          />
          <h4 id="uselesstext1">It`s </h4>
          <h3 id="player" style={{ float: "left", color: "#ff6969" }}>
            red
          </h3>
          <h4 id="uselesstext2">s turn</h4>
          <p id="badtext" style={{ float: "left" }} />
        </div>
      </div>
    );
  }
}
export default Ludo;
