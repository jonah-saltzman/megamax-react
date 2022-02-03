import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { genSpaces, smallMap, gameOver } from "../helpers";
import { SET_BOARD, SET_GAME } from "../context/action-types";

const Small = () => {
    const { state, dispatch } = useContext(AppContext)
    const [ spaceObjs, setSpaceObjs ] = useState<Array<SpaceProps>>(null)
    const [ spaceJsx, setSpaceJsx ] = useState<R>([])
    const { turn } = state.game
    const board = state.board

    const click = (pos: number) => {
        if (board[pos] || state.game.over) {
            return
        }
        const newBoard = [...board]
        const newGame = {...state.game, turn: turn === 'x' ? 'o' : 'x'}
        newBoard[pos] = turn
        dispatch({ type: SET_BOARD, payload: newBoard })
        dispatch({ type: SET_GAME, payload: newGame })
    }
    useEffect(() => {
        const renderBoard = [...state.board]
        const results = gameOver(renderBoard, 'small')
            if (results.over) {
                const newBoard = [...board]
                const newGame = {...state.game}
                console.log('game is over')
                const newObjs = [...spaceObjs]
                newGame.over = true
                if (results.winner) {
                    newGame.winner = results.winner
                    results.wins.forEach((win) => {
                        for (const n of win) {
                            const i = newObjs.findIndex((obj) => obj.position === n)
                            newObjs[i].winPos = true
                        }
                    })
                    console.log('win!')
                    console.log(newObjs)
                    setSpaceObjs(newObjs)
                } else {
                    console.log('draw!')
                    newObjs.forEach((obj) => (obj.draw = true))
                    setSpaceObjs(newObjs)
                }
                return
            }
        setSpaceObjs(genSpaces(renderBoard, 'small', click, state.game.pvp, state.game.draw))
    }, [state.board])

    useEffect(() => {
        if (!spaceObjs) {
            return
        }
        console.log(spaceObjs)
        setSpaceJsx(spaceObjs.map((obj, i) => smallMap(obj, i)))
    }, [spaceObjs])
    return (
			<div className='small'>
				{spaceJsx}
			</div>
		)
}

export default Small