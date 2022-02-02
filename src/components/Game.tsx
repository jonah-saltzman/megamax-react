import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Board from "./Board";

const Game = () => {
    const { state, dispatch } = useContext(AppContext)
    const { game } = state

    return (
        <Board size={game.size} />
    )
}

export default Game