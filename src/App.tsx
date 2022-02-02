import React, { useState, useEffect, useReducer } from 'react'
import {
	BrowserRouter as Router,
	Routes as Switch,
	Route,
} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppContext } from './context/AppContext'
import { defaultGame, defaultAuth } from './context/default'
import reducer from './context/reducer'
import Nav from './Nav'

const initialState: StateInterface = {
	auth: defaultAuth,
	game: defaultGame,
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
	return <AppContext.Provider value={{state, dispatch}}>
        <Nav />
    </AppContext.Provider>
}

export default App