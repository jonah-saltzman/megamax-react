import React, { createContext, useReducer } from 'react'
import { defaultGame, defaultAuth } from '../context/default'
import reducer from '../context/reducer'

const initialState: StateInterface = {
	auth: defaultAuth,
	game: defaultGame,
}

export const AppContext = createContext<{
	state: StateInterface
	dispatch: React.Dispatch<any>
}>({ state: initialState, dispatch: (): void => null })
