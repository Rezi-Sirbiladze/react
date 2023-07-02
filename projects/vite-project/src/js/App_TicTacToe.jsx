import { useState } from "react"

const TURNS = {
    X: 'x',
    O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div
            onClick={handleClick}
            className={className}
        >
            {children}
        </div>
    )
}

const WINNER_COMBOS = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
]

export function App_TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null)

    const checkWinner = (boardToCheck) => {
        for (const combo of WINNER_COMBOS) {
            const [a, b, c] = combo
            if (boardToCheck[a] &&
                boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[a] === boardToCheck[c]
            ) {
                return boardToCheck[a]
            }
        }
        return null
    }

    const checkEndGame = (boardToCheck) => {
        return boardToCheck.every((Square) => Square != null)
    }

    const updateBoard = (index) => {
        if (board[index] || winner) return

        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }
    }

    const resertGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }

    return (
        <main className="board">
            <h1>Tic Tac Toe</h1>
            <button onClick={resertGame}>Empezar de nuevo</button>

            <section className="game">
                {
                    board.map((square, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {square}
                            </Square>
                        )
                    })
                }
            </section>

            <section className="turn">
                <Square
                    isSelected={turn === TURNS.X}
                >
                    {TURNS.X}
                </Square>

                <Square
                    isSelected={turn === TURNS.O}
                >
                    {TURNS.O}
                </Square>
            </section>

            {
                winner != null && (
                    <section className="winner">
                        <div className="texto">
                            <h2>
                                {
                                    winner === false
                                        ? 'Empate'
                                        : 'Ganó'
                                }
                            </h2>

                            <header className="win">
                                {winner && <Square>{winner}</Square>}
                            </header>

                            <footer>
                                <button onClick={resertGame}>Empezar de nuevo</button>
                            </footer>
                        </div>
                    </section>
                )
            }
        </main>
    )
} 