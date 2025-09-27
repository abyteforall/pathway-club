import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      <div className="about-content">
        <div className="title-banner about-banner">
          <span className="title-inner">About Us</span>
        </div>
        <div className="about-inner">
          <h2 className="about-text">
            The PATH Club started from the simple question: “How can teens
            successfully land a job?” With that, inspiration sparked to what we
            know today. PATH is all about community, connecting and evolving to
            become the best version of yourself. From guest speaking events to
            one-on-one conversations, The PATH Club offers the resources needed
            to help teens build their career now.
          </h2>
        </div>
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
