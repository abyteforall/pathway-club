import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/officer-application" className="nav-link">Officer Application</Link>
      </div>
      <div className="nav-right">
        <Link to="/calendar" className="nav-link">Calendar</Link>
        <Link to="/officers" className="nav-link">Officers</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
