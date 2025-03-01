import React, { useEffect, useState } from 'react'
import './styles.css'

function Square({ value, onClick, win }) {
    return <button className={!win ? 'square' : 'no-square'} onClick={onClick}>{value}</button>
}

export const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(''))
    const [xTurn, setXturn] = useState(true);
    const [status, setStatus] = useState('');
    const [win, setWin] = useState('');

    function handleClick(index) {
        let cpySquares = [...squares];
        if (!win && squares[index] === '') {
            cpySquares[index] = xTurn ? 'X' : 'O';
            setXturn(!xTurn);
            setSquares(cpySquares);
        }
    }

    function getWinner(squares) {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7]
        ]

        for (let i = 0; i < win.length; i++) {
            const [x, y, z] = win[i];
            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                setWin(true);
                return squares[x];
            }
        }
        return null;
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every(item => item !== '')) {
            setStatus("This is a draw!");
        }
        else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}`)
        }
        else {
            setStatus(`Next Player is ${xTurn ? 'X' : 'O'}`)
        }
    }, [squares, xTurn])

    function handleRestart() {
        setSquares(Array(9).fill(''));
        setWin('');
        setXturn(true)
    }

    return (
        <div className='contain'>
            <h3 className='linear-text-gradient' style={{ color: 'white', textAlign: 'center', marginBottom: '50px', fontFamily: 'cursive' }}>TIC TAC TOE</h3>
            <div className="row">
                <Square onClick={() => handleClick(0)} value={squares[0]} win={win} />
                <Square onClick={() => handleClick(1)} value={squares[1]} win={win} />
                <Square onClick={() => handleClick(2)} value={squares[2]} win={win} />
            </div>
            <div className="row">
                <Square onClick={() => handleClick(3)} value={squares[3]} win={win} />
                <Square onClick={() => handleClick(4)} value={squares[4]} win={win} />
                <Square onClick={() => handleClick(5)} value={squares[5]} win={win} />
            </div>
            <div className="row">
                <Square onClick={() => handleClick(6)} value={squares[6]} win={win} />
                <Square onClick={() => handleClick(7)} value={squares[7]} win={win} />
                <Square onClick={() => handleClick(8)} value={squares[8]} win={win} />
            </div>
             <div className='status'>{status}</div> 
            

            <div className='footer'>
                <button type="button" class="btn" onClick={handleRestart}>
                    <strong>Restart</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </button>

                <button type="button" class="btn">
                    <strong>See Status</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </button>
            </div>
        </div>
    )
}

