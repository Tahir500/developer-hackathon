import React from "react";
export const Pawn = ({ pawnColor, pawnNumber }) => (
  <div className={`pawns ${pawnColor} ${pawnColor}pawn${pawnNumber + 1}`} />
);
