import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="main-content">
        <Navbar />
        <div className="page-content">
          <div className="club-title">
            <div className="title-banner">
              <span className="title-inner">THE</span>
            </div>
            <h1 className="title-path">PATH</h1>
            <h2 className="title-club">CLUB</h2>
          </div>
          <div className="calendar-hint">
            <div className="calendar-arrow"></div>
            <p className="calendar-text">
              Find out when our meetings are here!
            </p>
          </div>
          <div className="button-container">
            <div className="button-wrap">
              <a
                href="mailto:thepathclub25@gmail.com "
                className="arrow-nav-button"
              >
                CONTACT
              </a>
            </div>
            <div className="button-wrap">
              <a
                href="https://www.google.com/url?sa=j&url=https%3A%2F%2Fforms.gle%2FihzGmLp3Mw2LSV17A&uct=1722691979&usg=8pYW5YpjgcS1NDqZWVMgZV_QDZQ.&source=editors"
                className="arrow-nav-button"
              >
                JOIN
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link to="/job-hub" className="job-hub-button">
        JOB HUB
      </Link>
    </>
  );
}

export default Home;
