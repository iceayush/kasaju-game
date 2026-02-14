import { useNavigate, useLocation } from "react-router-dom";
import FloatingHearts from "../../components/FloatingHearts";
import "./poem.css";
import song from "../../assets/Songforyou.mp3"; // Import the song from assets

function Poem() {
    const navigate = useNavigate();
    const location = useLocation();
    const playerName = location.state?.name || "My Love";

    return (
        <div className="poem-container">
            {/* Audio tag added here - 'autoPlay' will work since user interacted with the game */}
            <audio src={song} autoPlay loop />

            <FloatingHearts />

            <h1>So Far Away But Yet So Close ❤️</h1>

            <p>
                Miles away, no hug, no kiss.<br/>
                The touch of you is what I miss.<br/>
                My love is the same, but the room is bare,<br/>
                A heavy void in the quiet air.
            </p>

            <p>
                One burns in gold, one glows in white<br/>
                Divided by the deep of night.<br/>
                I wait for when our orbits lean,<br/>
                Until there is no space between.<br/>
                You send the fire that makes ne bright,<br/>
                I am the ghost, you are the light.
            </p>

            <p>
                I never put my faith in days.<br/>
                Set aside for scripted praise.<br/>
                But since its our first, <br/>
                I'll say what I feel real<br/>
                Across the miles, the words stay true:<br/>
                This Valentine's belongs to you.
            </p>

            <p>
                Miles away, no hug, no kiss.<br/>
                The love remains. The touch I miss.
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

                <button
                    className="last-touch-button"
                    onClick={() => navigate("/final-surprise")}
                >
                    💖 One Last Touch
                </button>

            </div>
        </div>
    );
}

export default Poem;