import React, { Component } from "react";

class Ludo extends Component {
  render() {
    return (
      <div className="ludo-wrapper">
        <div id="main">
          <div id="board" />
          <div id="dice" onclick="randomNum()" className="dice" />
          {/* <!-- red pawns  start top 28 left 318--> */}
          <div
            className="pawns"
            id="redpawn1"
            onclick="randomMove('red',1)"
            style={{
              "background-color": "#ff6969",
              top: "149px",
              left: "442px"
            }}
          />
          <div
            className="pawns"
            id="redpawn2"
            onclick="randomMove('red',2)"
            style={{
              "background-color": "#ff6969",
              top: "102px",
              left: "395px"
            }}
          />
          <div
            className="pawns"
            id="redpawn3"
            onclick="randomMove('red',3)"
            style={{
              "background-color": "#ff6969",
              top: "55px",
              left: "442px"
            }}
          />
          <div
            className="pawns"
            id="redpawn4"
            onclick="randomMove('red',4)"
            style={{
              "background-color": "#ff6969",
              top: "102px",
              left: "490px"
            }}
          />
          {/* <!-- yellow pawns  start top 523 left 218--> */}
          <div
            className="pawns"
            id="yellowpawn1"
            onclick="randomMove('yellow',1)"
            style={{
              "background-color": "#c5c501",
              top: "451px",
              left: "47px"
            }}
          />
          <div
            className="pawns"
            id="yellowpawn2"
            onclick="randomMove('yellow',2)"
            style={{
              "background-color": "#c5c501",
              top: "451px",
              left: "140px"
            }}
          />
          <div
            className="pawns"
            id="yellowpawn3"
            onclick="randomMove('yellow',3)"
            style={{
              "background-color": "#c5c501",
              top: "404px",
              left: "93px"
            }}
          />
          <div
            className="pawns"
            id="yellowpawn4"
            onclick="randomMove('yellow',4)"
            style={{
              "background-color": "#c5c501",
              top: "498px",
              left: "93px"
            }}
          />
          {/* <!-- green pawns  start top 227 left 22--> */}
          <div
            className="pawns"
            id="greenpawn1"
            onclick="randomMove('green',1)"
            style={{ "background-color": "green", top: "149px", left: "93px" }}
          />
          <div
            className="pawns"
            id="greenpawn2"
            onclick="randomMove('green',2)"
            style={{ "background-color": "green", top: "102px", left: "140px" }}
          />
          <div
            className="pawns"
            id="greenpawn3"
            onclick="randomMove('green',3)"
            style={{ "background-color": "green", top: "55px", left: "93px" }}
          />
          <div
            className="pawns"
            id="greenpawn4"
            onclick="randomMove('green',4)"
            style={{ "background-color": "green", top: "102px", left: "47px" }}
          />
          {/* <!-- blue pawns  start top 326 left 515--> */}
          <div
            className="pawns"
            id="bluepawn1"
            onclick="randomMove('blue',1)"
            style={{
              "background-color": "#6a6ac5",
              top: "451px",
              left: "490px"
            }}
          />
          <div
            className="pawns"
            id="bluepawn2"
            onclick="randomMove('blue',2)"
            style={{
              "background-color": "#6a6ac5",
              top: "451px",
              left: "395px"
            }}
          />
          <div
            className="pawns"
            id="bluepawn3"
            onclick="randomMove('blue',3)"
            style={{
              "background-color": "#6a6ac5",
              top: "404px",
              left: "442px"
            }}
          />
          <div
            className="pawns"
            id="bluepawn4"
            onclick="randomMove('blue',4)"
            style={{
              "background-color": "#6a6ac5",
              top: "498px",
              left: "442px"
            }}
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
