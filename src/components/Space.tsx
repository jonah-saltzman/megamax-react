import React, { FC } from 'react'

const Space = (props: SpaceProps) => {
	return (
        <div onClick={() => props.click(props.position)} className='space'>{props.position}</div>
    )
}

export default Space
