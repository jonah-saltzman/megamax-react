import React from 'react'
import { borderClasses } from '../helpers'

const Space = (props: SpaceProps) => {
    const { click, position, borders, size, player, pvp, draw, winPos } = props
    let classes = borderClasses(borders, size) + ' space'
    if (draw) {
        classes += ' draw'
    } else if (winPos) {
        if (pvp || (player === 'x')) {
            classes += ' green'
        } else {
            classes += ' red'
        }
    }
	return (
        <div onClick={() => click(position)} className={classes}>{player}</div>
    )
}

export default Space
