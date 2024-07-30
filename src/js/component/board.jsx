import React from "react";
import { useState } from "react";
import Square from "./square"

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)

const handleCLick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
        return
    }

    squares[i] = isX ? 'X' : 'O'
    setSquares(squares)
    setIsX(!isX)
}

const winner = calculateWinner(squares)
let status 

if (winner) {
    status = `Winner: ${winner}`
} else {
    status = `Next player: ${isX ? 'X' : 'O'}` 
}

const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))
}

    return (
        <div className="board">
            <div className="board-row">
                <Square value={squares[0]} onClick={() => handleCLick(0)}/>
                <Square value={squares[1]} onClick={() => handleCLick(1)}/>
                <Square value={squares[2]} onClick={() => handleCLick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => handleCLick(3)}/>
                <Square value={squares[4]} onClick={() => handleCLick(4)}/>
                <Square value={squares[5]} onClick={() => handleCLick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => handleCLick(6)}/>
                <Square value={squares[7]} onClick={() => handleCLick(7)}/>
                <Square value={squares[8]} onClick={() => handleCLick(8)}/>
            </div>
            <div className="status">{status}</div>
            <button className="restart" onClick={handleRestart}>Restart Game</button>
        </div>
    )
}

function calculateWinner(squares) {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i]

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
}

export default Board;