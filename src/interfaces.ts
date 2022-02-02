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
	size: BoardSize
}

type BoardState = Array<Player>

interface StateInterface {
	auth: AuthInterface
	game: GameInterface
    board: Board
}

type Player = 'x' | 'o' | null

type BoardSize = 'small' | 'large'

type Action =
	| { type: 'SET_AUTH'; payload: AuthInterface }
	| { type: 'SET_GAME'; payload: GameInterface }

interface BoardOpts {
    size: BoardSize
}

interface Borders {
    top: boolean
    right: boolean
    bottom: boolean
    left: boolean
}

interface SpaceProps {
    winPos: boolean
    player: Player
    position: number
    click: Function
}

type Board = Array<Player>

type R = Array<JSX.Element>