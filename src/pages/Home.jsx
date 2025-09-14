import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <div className="club-title">
            <div className="title-banner">
              <span className="title-the">THE</span>
            </div>
            <h1 className="title-path">PATH</h1>
            <h2 className="title-club">CLUB</h2>
          </div>
          <div className="calendar-hint">
            <div className="calendar-arrow"></div>
            <p className="calendar-text">Find out when our meetings are here!</p>
          </div>
          <div className="button-container">
            <div className="button-wrap">
              <Link to="/contact" className="contact-button">CONTACT</Link>
            </div>
            <div className="button-wrap">
              <Link to="/join" className="join-button">JOIN</Link>
            </div>
          </div>
        </div>
      </div>
      <Link to="/job-hub" className="job-hub-button">JOB HUB</Link>
    </>
  );
}

export default Home;
