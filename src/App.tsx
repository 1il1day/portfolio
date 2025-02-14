import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home 페이지 */}
        <Route path="/" element={<HomePage />} />
        
        {/* TestPage 서브 페이지 */}
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;