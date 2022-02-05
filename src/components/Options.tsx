import React, { useEffect, useState, createRef } from "react";
import { Button, ToggleButton, ToggleButtonCheckboxProps, ToggleButtonGroup } from "react-bootstrap";

const Options = (props: OptHandlers) => {
    const { reset, started, opts } = props
    const [ mode, setMode ] = useState<Mode>('pvp')
    const [ size, setSize ] = useState<Array<BoardSize>>(['small'])
    const modeRef = createRef<HTMLAnchorElement>()
    const sizeRef = createRef()

    const changeMode = (value: Mode) => {
        setMode(value)
    }

    useEffect(() => {
        console.log('mode: ', mode)
        console.log(modeRef)
        modeRef.current.blur()
    }, [mode])

    return (
			<>
				<div className='options'>
					<Button
						disabled={!started}
						onClick={() => reset()}
						className='button reset grp'>
						Reset
					</Button>
					<ToggleButtonGroup
                        ref={modeRef}
						onChange={changeMode}
						type='radio'
						name='options'
						defaultValue={1}>
						<ToggleButton
							variant={mode === 'ai' ? 'outline-primary' : 'primary'}
							id='tbg-radio-1'
							value={'pvp'}>
							PVP
						</ToggleButton>
						<ToggleButton
							variant={mode === 'pvp' ? 'outline-primary' : 'primary'}
							id='tbg-radio-2'
							value={'ai'}>
							vs AI
						</ToggleButton>
					</ToggleButtonGroup>
					<ToggleButtonGroup type='checkbox' className='size grp' value={size}>
						<ToggleButton
							// checked={size === 'small'}
							key='t-3'
							variant='outline-primary'
							value={'small'}>
							3x3
						</ToggleButton>
						<ToggleButton
							// checked={size === 'large'}
							key='t-4'
							variant='outline-success'
							value={'large'}>
							5x5
						</ToggleButton>
					</ToggleButtonGroup>
				</div>
				{/* <ToggleButtonGroup
					type='radio'
					defaultValue={'pvp'}
					onChange={setMode}>
					<ToggleButton id='tbg-btn-1' value={'pvp'}>
						PVP
					</ToggleButton>
					<ToggleButton id='tbg-btn-2' value={'ai'}>
						vs AI
					</ToggleButton>
				</ToggleButtonGroup> */}
			</>
		)
}

export default Options