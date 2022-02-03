import React from "react"
import Space from "./components/Space"

const defaultBorders = {
    top: true,
    right: true,
    bottom: true,
    left: true
}

export const genSpaces = (board: Board, size: BoardSize, click: Function): Array<SpaceProps> => {
    return board.map((player, i) => ({
        key: (size === 'small' ? 's-' : 'l-') + i.toString(10),
        player,
        position: i,
        winPos: false,
        click,
        borders: {...defaultBorders},
        size
    }))
}

export const borderClass = (borders: Borders): string => {
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

export const smallMap = (options: SpaceProps, i: number) => {
    const { borders } = options
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
    const props = {...options, borders: {...borders}}
    return <Space {...props} />
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

export const gameOver = () => {

}