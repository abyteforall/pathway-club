import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      <div className="about-content">
        <div className="title-banner about-banner">
          <span className="title-inner">About Us</span>
        </div>
        <div className="about-inner"></div>
      </div>
      <div className="about-btn-rotate-wrapper">
        <div className="button-wrap about-home-button">
          <Link to="/" className="arrow-nav-button about-home-link">
            HOME
          </Link>
        </div>
      </div>
    </main>
  );
}

export default About;
