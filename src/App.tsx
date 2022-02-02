import React, { useState, useEffect, useReducer } from 'react'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppContext } from './context/AppContext'
import { defaultGame, defaultAuth, defaultBoard } from './context/default'
import reducer from './context/reducer'
import Nav from './Nav'
import Game from './components/Game'

const initialState: StateInterface = {
	auth: defaultAuth,
	game: defaultGame,
    board: defaultBoard
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<AppContext.Provider value={{ state, dispatch }}>
            <ToastContainer />
			<Nav />
            <Container className='game'>
                <Game />
            </Container>
		</AppContext.Provider>
	)   
}

export default App