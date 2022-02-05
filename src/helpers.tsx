import React from "react"
import Space from "./components/Space"

const defaultBorders = {
    top: true,
    right: true,
    bottom: true,
    left: true
}

export const getMoves = (board: Board) => {

}

export const genSpaces = (board: Board, size: BoardSize, click: Function, pvp: boolean, draw: boolean): Array<SpaceProps> => {
    return board.map((player, i) => ({
        key: (size === 'small' ? 's-' : 'l-') + i.toString(10),
        player,
        position: i,
        winPos: false,
        click,
        borders: {...defaultBorders},
        size,
        pvp,
        draw
    }))
}

export const borderClasses = (borders: Borders, size: BoardSize): string => {
    const classes = []
    if (!borders.top) {
        classes.push('top')
    }
    if (!borders.right) {
        classes.push('right')
    }
    if (!borders.bottom) {
        classes.push('bottom')
    }
    if (!borders.left) {
        classes.push('left')
    }
    return classes.join(' ')
}

export const smallMap = (i: number) => {
    const borders = {...defaultBorders}
    if (i % 3 === 0) {
        borders.left = false
    }
    if (i % 3 === 2) {
        borders.right = false
    }
    if (i < 3) {
        borders.top = false
    }
    if (i > 5) {
        borders.bottom = false
    }
    return borders
}

const smallConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

const bigConditions = [
	[0, 1, 2, 3, 4],
	[5, 6, 7, 8, 9],
	[10, 11, 12, 13, 14],
	[15, 16, 17, 18, 19],
	[20, 21, 22, 23, 24],
	[0, 5, 10, 15, 20],
	[1, 6, 11, 16, 21],
	[2, 7, 12, 17, 22],
	[3, 8, 13, 18, 23],
	[4, 9, 14, 19, 24],
	[0, 6, 12, 18, 24],
	[4, 8, 12, 16, 20],
]

export const toArray = (objects: Array<SpaceProps>, size: BoardSize): Array<Player> => {
    const arr = Array(size === 'small' ? 9 : 25)
    objects.forEach(obj => {
        arr[obj.position] = obj.player
    })
    return arr
}

export const gameOver = (board: Board, size: BoardSize): Results => {
    const conditions = size === 'small' ? smallConditions : bigConditions
    const results: Results = {
        over: false,
        winner: null,
        wins: [],
        started: true
    }
    conditions.forEach(condition => {
        if (
					board[condition[0]] &&
					condition.every((space) => board[space] === board[condition[0]])
				) {
					results.winner = board[condition[0]]
                    results.wins.push(condition)
                    results.over = true
				}
    })
    if (board.every(pos => pos)) {
        results.over = true
    }
    return results
}

export const blankBoard = (size: BoardSize, mode: Mode): Array<SpaceProps> => {
    const board = []
    for (let i = 0; i < (size === 'small' ? 9 : 25); i++) {
        const obj: SpaceProps = {
            winPos: false,
            player: null,
            position: i,
            click: null,
            borders: {...defaultBorders},
            size,
            pvp: mode === 'pvp',
            draw: false
        }
        board.push(obj)
    }
    return board
}