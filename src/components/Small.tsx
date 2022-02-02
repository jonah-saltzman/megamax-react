import React, { useContext, FC } from "react";
import Space from "./Space";
import { AppContext } from "../context/AppContext";
import { Container, Row, Col } from "react-bootstrap";

const Small = () => {
    const { state, dispatch } = useContext(AppContext)
    const style = {border: '1px black solid'}
    const click = (pos: number) => {
        console.log('clickd: ', pos)
        return
    }
    const spaces = state.board.map((player, i) => (
			<Space key={'small-' + i} click={click} player={player} position={i} winPos={false} />
		))
    const rows: Array<R> = [[], [], []]
    let i = 0
    for (const space of spaces) {
        rows[i].push(<Col>{space}</Col>)
        i = i === 2 ? 0 : i + 1
    }
    return (
			<Container className='small'>
				<Row>
					{rows[0]}
				</Row>
				<Row>
					{rows[1]}
				</Row>
				<Row>
					{rows[2]}
				</Row>
			</Container>
		)
}

export default Small