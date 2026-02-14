import React from "react";
import "./finalSurprise.css";
import surpriseGif from "../../assets/Kasaju.gif"; // Import directly from src/assets

function FinalSurprise() {
    return (
        <div className="final-surprise">
            <img
                className="surprise-video"
                src={surpriseGif}
                alt="Kasaju Surprise"
            />
        </div>
    );
}

export default FinalSurprise;