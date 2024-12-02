import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar';
;
import Projects from './components/Projects';

import Dashboard from './components/Dashboard';

export default function App() {
  return (
      <Router>
      
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects/:projectId" element={<Projects />} />
          </Routes>
        
      </Router>
  
  );
}
