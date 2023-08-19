import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import DemoPage from "./pages/DemoPage/DemoPage";
import NavBar from "./components/NavBar/NavBar";
import "./theme.css";
import "./app.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
