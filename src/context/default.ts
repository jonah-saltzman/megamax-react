export const defaultAuth: AuthInterface = {
	authed: false,
	email: null,
	token: null,
}

export const defaultGame: GameInterface = {
	started: true,
	turn: 'x',
	over: false,
	winner: null,
	moves: 0,
	easy: null,
	size: 'small',
}

export const defaultBoard: Board = [
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
	null,
]