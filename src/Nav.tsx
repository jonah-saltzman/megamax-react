import React, { useContext } from "react";
import {
    Button,
	Navbar
} from 'react-bootstrap'

const Nav = () => {
    return (
			<Navbar sticky='top' className='nav'>
				<Navbar.Brand className='text-white navbrand'>
					<span className='mega'>Mega</span>Max{' '}
					<span className='subhead'>Tic-Tac-Toe</span>
				</Navbar.Brand>
				<Button className='button nav-right'>Login</Button>
			</Navbar>
		)
}

export default Nav