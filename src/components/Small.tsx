import React, { useContext, useEffect, useState } from "react";
import { genSpaces, smallMap, gameOver, blankBoard, toArray } from "../helpers";
import Options from "./Options";
import { defaultSmallBoard, defaultLargeBoard } from "../context/default";
import Space from "./Space";

const defaultStatus: Results = { over: false, winner: null, wins: [[]], started: false }

const Small = () => {
    const [ board, setBoard ] = useState<Array<SpaceProps>>(null)
    const [ size, setSize ] = useState<BoardSize>('small')
    const [ mode, setMode ] = useState<Mode>('pvp')
    const [ player, setPlayer ] = useState<Player>('x')
    const [ gameStatus, setStatus ] = useState<Results>(defaultStatus)

    useEffect(() => {
        reset()
    }, [])

    const reset = () => {
        setBoard(blankBoard(size, mode))
        setPlayer('x')
        setStatus(defaultStatus)
    }

    const makeMove = (pos: number) => {
        const tempBoard = [...board]
        tempBoard[pos].player = player
        const status = gameOver(toArray(tempBoard, size), size)
        const newBoard: Array<SpaceProps> = []
        tempBoard.forEach(obj => {
            const newObj = {...obj}
            if (newObj.position === pos) {
                newObj.player = player
            }
            if (status.over) {
                if (!status.winner) {
                    newObj.draw = true
                    newBoard.push(newObj)
                } else {
                    for (const win of status.wins) {
                        if (win.some(ind => ind === newObj.position)) {
                            newObj.winPos = true
                        }
                    }
                }
            }
            newBoard.push(newObj)
        })
        setBoard(newBoard)
        setPlayer(player === 'x' ? 'o' : 'x')
        setStatus(status)
    }

    const click = (pos: number) => {
        if (gameStatus.over) {
            return
        }
        makeMove(pos)
    }

    return (
			<>
				<Options opts={{size, mode}} reset={reset} started={gameStatus.started} />
				<div className='small'>
					{board ? board.map((space, i) => {
                        space.click = click
                        return <Space {...space} key={'s-' + i} />
                        }
					) : null}
				</div>
				)
			</>
		)
}

export default Small