import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home 페이지 */}
        <Route path="/" element={<HomePage />} />
        
        {/* ProjectsPage 페이지 */}
        <Route path="/projects" element={<ProjectsPage />} />

        {/* FIXME: TestPage 페이지 */}
        <Route path="/Test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;