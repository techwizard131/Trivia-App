import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import QuizContextContainer from 'Contexts/QuizContext';
import { HomePage, QuizPage, ResultPage } from 'Pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <QuizContextContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </Router>
      </QuizContextContainer>
    </div>
  );
}

export default App;
