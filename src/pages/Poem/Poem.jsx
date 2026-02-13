import { useNavigate, useLocation } from "react-router-dom";
import FloatingHearts from "../../components/FloatingHearts";
import "./poem.css";

function Poem() {
    const navigate = useNavigate();
    const location = useLocation();
    const playerName = location.state?.name || "My Love";

    return (
        <div className="poem-container">
            <FloatingHearts />

            <h1>For {playerName} ❤️</h1>

            <p>
                Roses are red,<br/>
                Violets are blue,<br/>
                Every moment spent with you<br/>
                Feels like a dream come true.
            </p>

            <p>
                Your smile lights up my day,<br/>
                Your laugh warms my heart,<br/>
                Forever with you,<br/>
                I never want to part.
            </p>

            <div className="poem-buttons">
                <button
                    className="play-again-button"
                    onClick={() => navigate("/game", { state: { name: playerName } })}
                >
                    🎮 Play Again
                </button>

                <button
                    className="home-button"
                    onClick={() => navigate("/")}
                >
                    💌 Back to Start
                </button>
            </div>
        </div>
    );
}

export default Poem;
