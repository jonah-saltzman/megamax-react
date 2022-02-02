import React, { useContext } from "react";
import {
	Navbar
} from 'react-bootstrap'
import { AppContext } from "./context/AppContext";

const Nav = () => {
    const { state, dispatch } = useContext(AppContext)
    const printState = () => {
        console.log(state)
    }
    return (
			<Navbar onClick={printState} sticky='top' className='nav'>
				<Navbar.Brand className='text-white navbrand'>
					MegaMax Tic-Tac-Toe
				</Navbar.Brand>
			</Navbar>
		)
}

export default Nav