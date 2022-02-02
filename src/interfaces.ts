interface AuthInterface {
	authed: boolean
	email: string
	token: string
}

interface GameInterface {
	started: boolean
	turn: Player
	over: boolean
	winner: Player
	moves: number
	easy: boolean
	small: boolean
}

interface StateInterface {
	auth: AuthInterface
	game: GameInterface
}

type Player = 'x' | 'o'

type Action =
	| { type: 'SET_AUTH'; payload: AuthInterface }
	| { type: 'SET_GAME'; payload: GameInterface }