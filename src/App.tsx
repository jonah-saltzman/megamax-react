import React, { useState, useEffect, useReducer } from 'react'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'
import Game from './components/Game'

const App = () => {
    //const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<>
			<ToastContainer />
			<Nav />
			<div className='game'>
				<Game />
			</div>
		</>
	)   
}

export default App