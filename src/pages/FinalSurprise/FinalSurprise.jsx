import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./finalSurprise.css";
import surpriseGif from "../../assets/Kasaju.gif";

function FinalSurprise() {
    const navigate = useNavigate();

    return (
        <div className="final-surprise">
            <img
                className="surprise-video"
                src={surpriseGif}
                alt="Kasaju Surprise"
            />

            <div className="button-container">
                <button
                    className="home-button"
                    onClick={() => navigate("/")}
                >
                    Back to the Start
                </button>
            </div>
        </div>
    );
}

export default FinalSurprise;