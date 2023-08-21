import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ParticlesBackground } from "./components/particlesBackground/ParticlesBackground";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { NavBar } from "./components/navBar/NavBar";
import "./theme.css";
import ClusterPage from "./pages/ClusterPage/ClusterPage";
import AstroScopePage from "./pages/AstroScopePage/AstroScopePage";

function App() {
  return (
    <Router>
      <NavBar />
      <ParticlesBackground />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/astroscope" element={<AstroScopePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/cluster" element={<ClusterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
