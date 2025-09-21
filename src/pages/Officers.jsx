import "../styles/Officers.css";
import { Link } from "react-router-dom";

function Officers() {
  return (
    <main className="officers-page">
      <div className="officers-content">
        <div className="title-banner officers-banner">
          <span className="title-inner">Officers</span>
        </div>
        <div className="officers-inner">
          <div className="officers-item">
            <div className="officers-type"></div>
            <h2>CHIEF MARKETER</h2>
            <h3></h3>
          </div>
          <div className="officers-item">
            <div className="officers-type"></div>
            <h2>FOUNDER</h2>
            <h3>Samara Bozeman-Dean</h3>
          </div>
          <div className="officers-item">
            <div className="officers-type"></div>
            <h2>VICE PRESIDENT</h2>
            <h3></h3>
          </div>
        </div>
      </div>
      <div className="officers-btn-rotate-wrapper">
        <div className="button-wrap officers-home-button">
          <Link to="/" className="arrow-nav-button officers-home-link">
            HOME
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Officers;
