import React from "react";

import Status from "./status/Status";
import Board from "./board/Board";
import Players from "./players/Players";
import { useSelector } from "react-redux";
import { getActiveGameId } from "../../redux/currentPlayer";

const Game = () => {
  const activeGameId: string = useSelector(getActiveGameId);
  return activeGameId ? (
    <div className="flex flex-col">
      <Status />
      <Board />
      <Players />
    </div>
  ) : (
    <div className="flex flex-col">No Game Selected</div>
  );
};

export default Game;
