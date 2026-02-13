import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Board from "../../components/TicTacToe/Board";
import "./game.css";

function Game() {
    const navigate = useNavigate();
    const location = useLocation();
    const playerName = location.state?.name || "Kasaju";
    const [unlocked, setUnlocked] = useState(false);

    return (
        <div className="game-container">
            <h2>{playerName}, pleasure lies when you win 💘</h2>
            <p>Don't go rough! Play Gentle</p>
            <p>C'mon Just Win To Know More</p>

            <Board playerName={playerName} onWin={() => setUnlocked(true)} />

            {unlocked && (
                <button
                    className="door-button"
                    onClick={() => navigate("/poem", { state: { name: playerName } })}
                >
                    🚪 Open The Door
                </button>
            )}
        </div>
    );
}

export default Game;
