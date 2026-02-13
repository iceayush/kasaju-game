import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Game from "./pages/Game/Game.jsx";
import Poem from "./pages/Poem/Poem.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/poem" element={<Poem />} />
            </Routes>
        </Router>
    );
}

export default App;
