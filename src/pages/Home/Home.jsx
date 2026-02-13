import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/game"); // goes directly to Tic Tac Toe
    };

    return (
        <div className="home-container">
            <h1>Let's Celebrate Eco-Friendly Valentines 💖</h1>
            <h2>Happy Valentines Day Kasaju </h2>

            {/* GIF below the heading */}
            <div className="home-gif">
                <img
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExem12NTNocDBoamQ2aWU0amljODZ2a2oxZ2tvd3c5d3dsYjJla2RwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qKQQUKSSbWBkO2V3KX/giphy.gif"
                    alt="Valentine GIF"
                />
            </div>

            <button onClick={handleStart}>Let's Get It Started</button>
        </div>
    );
}

export default Home;
