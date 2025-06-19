import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;