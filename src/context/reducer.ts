import {
    SET_AUTH,
    SET_GAME,
} from './action-types'

import { defaultGame, defaultAuth } from './default'

export default (state: StateInterface, action: Action): StateInterface => {
	switch (action.type) {
		case SET_AUTH:
			return action.payload === null
				? { ...state, auth: defaultAuth }
				: { ...state, auth: action.payload }
        case SET_GAME:
            return action.payload === null
                ? { ...state, game: defaultGame }
                : { ...state, game: action.payload}
		default:
			return state
	}
}