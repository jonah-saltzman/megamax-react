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
    pvp: boolean,
    draw: boolean
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
	| { type: 'SET_BOARD'; payload: Board }

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
    click: Function | null
    borders: Borders
    size: BoardSize
    pvp: boolean
    draw: boolean
}

interface OptHandlers {
	reset: Function
	started: boolean
	change: Function
}

interface Options {
    mode: Mode
    size: BoardSize
}

type Board = Array<Player>

type R = Array<JSX.Element>

interface Results {
    over: boolean
    winner: Player
    wins: Array<Array<number>>
    started: boolean
}

interface Move {
    player: Player
    position: number
}

type Mode = 'pvp' | 'ai'

interface CompMove {
    to: number
    moves: number
}