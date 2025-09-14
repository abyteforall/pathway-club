import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Officers from './pages/Officers';
import About from './pages/About';
import OfficerApplication from './pages/OfficerApplication';
import JobHub from './pages/JobHub';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/about" element={<About />} />
          <Route path="/officer-application" element={<OfficerApplication />} />
          <Route path="/job-hub" element={<JobHub />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
