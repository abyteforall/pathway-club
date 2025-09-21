import "../styles/JobHub.css";
import { Link } from "react-router-dom";

function JobHub() {
  return (
    <main className="job-hub-page">
      <div className="job-hub-content">
        <div className="title-banner job-hub-banner">
          <span className="title-inner">THE PATH CLUB: JOBS</span>
        </div>
        <div className="job-hub-inner">
          <Link to="/jobs/retail">
            <div className="job-hub-type">
              <h2>Restaurant</h2>
            </div>
          </Link>
          <Link to="/jobs/retail">
            <div className="job-hub-type">
              <h2>Retail</h2>
            </div>
          </Link>
          <Link to="/jobs/internships">
            <div className="job-hub-type">
              <h2>Internships</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="job-hub-btn-rotate-wrapper">
        <div className="button-wrap job-hub-home-button">
          <Link to="/" className="arrow-nav-button job-hub-home-link">
            HOME
          </Link>
        </div>
      </div>
    </main>
  );
}

export default JobHub;
