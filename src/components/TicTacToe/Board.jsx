import { useEffect, useState } from "react";
import Square from "./Square";
import confetti from "canvas-confetti";
import clickSound from "../../assets/click.mp3";
import winSound from "../../assets/win.mp3";
import "./ticTacToe.css";

function Board({ onWin }) {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [winner, setWinner] = useState(null);
    const [gameOverMessage, setGameOverMessage] = useState("");
    const [loseCounter, setLoseCounter] = useState(0); // counts unsuccessful tries

    const clickAudio = new Audio(clickSound);
    const winAudio = new Audio(winSound);

    const winningLines = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    const checkWinner = (b) => {
        for (let [a,b1,c] of winningLines) {
            if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
        }
        if (!b.includes(null)) return "Tie";
        return null;
    };

    const handlePlayerMove = (index) => {
        if (board[index] || winner || !isPlayerTurn) return;

        clickAudio.play();

        const newBoard = [...board];
        newBoard[index] = "X";
        setBoard(newBoard);

        const result = checkWinner(newBoard);
        if (result === "X") triggerWin();
        else if (result === "Tie") triggerTie();
        else setIsPlayerTurn(false);
    };

    const triggerWin = () => {
        setWinner("X");
        winAudio.play();
        confetti({ particleCount: 200, spread: 120 });
        onWin();
    };

    const triggerLose = () => {
        setWinner("O");
        setGameOverMessage("I still love you, but try that again!");
        setLoseCounter(prev => prev + 1); // increase fail counter
    };

    const triggerTie = () => {
        setWinner("Tie");
        setGameOverMessage("Restart (I could watch you play this all day)");
        setLoseCounter(prev => prev + 1);
    };

    // AI move
    useEffect(() => {
        if (!isPlayerTurn && !winner) {
            const timeout = setTimeout(() => {
                const emptySquares = board
                    .map((val, i) => (val === null ? i : null))
                    .filter((v) => v !== null);

                if (emptySquares.length === 0) return;

                let move = null;

                // If player has failed >15 times, make AI easy
                const easyMode = loseCounter >= 100;

                if (!easyMode) {
                    // Smart AI
                    // 1️⃣ Can AI win?
                    for (let idx of emptySquares) {
                        const copy = [...board];
                        copy[idx] = "O";
                        if (checkWinner(copy) === "O") {
                            move = idx;
                            break;
                        }
                    }

                    // 2️⃣ Block player
                    if (move === null) {
                        for (let idx of emptySquares) {
                            const copy = [...board];
                            copy[idx] = "X";
                            if (checkWinner(copy) === "X") {
                                move = idx;
                                break;
                            }
                        }
                    }

                    // 3️⃣ Center
                    if (move === null && emptySquares.includes(4)) move = 4;

                    // 4️⃣ Corner
                    if (move === null) {
                        const corners = [0,2,6,8].filter(i => emptySquares.includes(i));
                        if (corners.length > 0) move = corners[Math.floor(Math.random() * corners.length)];
                    }

                    // 5️⃣ Side
                    if (move === null) move = emptySquares[Math.floor(Math.random() * emptySquares.length)];
                } else {
                    // EASY MODE: AI picks completely random move
                    move = emptySquares[Math.floor(Math.random() * emptySquares.length)];
                }

                // Apply AI move
                const newBoard = [...board];
                newBoard[move] = "O";
                setBoard(newBoard);

                const result = checkWinner(newBoard);
                if (result === "O") triggerLose();
                else if (result === "Tie") triggerTie();
                else setIsPlayerTurn(true);

            }, 700);

            return () => clearTimeout(timeout);
        }
    }, [board, isPlayerTurn, winner, loseCounter]);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setIsPlayerTurn(true);
        setGameOverMessage("");
    };

    return (
        <div className="board-wrapper">
            <div className="board">
                {board.map((cell, index) => (
                    <Square key={index} value={cell} onClick={() => handlePlayerMove(index)} />
                ))}
            </div>

            {winner && gameOverMessage && (
                <div className="game-over">
                    <p>{gameOverMessage}</p>
                    <button onClick={resetGame}>Play Again 🎮</button>
                </div>
            )}
        </div>
    );
}

export default Board;
