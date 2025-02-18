import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Home 페이지 */}
        <Route path="/" element={<HomePage />} />
        
        {/* ProjectsPage 페이지 */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;