import React from "react";
import { Container } from "react-bootstrap";
import Small from "./Small";
import Big from "./Big";

const Board = (props: BoardOpts) => {
    return (
        props.size === 'small'
            ? <Small />
            : <Big />
    )
}

export default Board