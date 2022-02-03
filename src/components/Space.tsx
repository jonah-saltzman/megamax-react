import React from 'react'
import { borderClass } from '../helpers'

const Space = (props: SpaceProps) => {
    const { click, position, borders, size, player } = props
    const classes = borderClass(borders) + ' space'
	return (
        <div onClick={() => click(position)} className={classes}>{player}</div>
    )
}

export default Space
