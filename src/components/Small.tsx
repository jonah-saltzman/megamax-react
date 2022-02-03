import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { genSpaces, smallMap } from "../helpers";
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
        dispatch({type: SET_BOARD, payload: newBoard})
        dispatch({type: SET_GAME, payload: newGame})
    }
    useEffect(() => {
        setSpaceObjs(genSpaces(state.board, 'small', click))
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