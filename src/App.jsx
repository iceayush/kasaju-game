import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Game from "./pages/Game/Game.jsx";
import Poem from "./pages/Poem/Poem.jsx";
import FinalSurprise from "./pages/FinalSurprise/FinalSurprise.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/poem" element={<Poem />} />
            <Route path="/final-surprise" element={<FinalSurprise />} />
        </Routes>
    );
}

export default App;
