import "../styles/JobHub.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Import all category data
import jobs from "../data/jobs.json";
import college from "../data/college.json";
import research from "../data/research.json";
import internships from "../data/internships.json";
import volunteering from "../data/volunteering.json";
import misc from "../data/misc.json";

function JobHub() {
  const [category, setCategory] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const combined = Object.values(allData).flat();
    if (searchTerm === "") {
      setCategory("");
      setDisplayData(combined);
      return;
    }
    let filteredData = categoryData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.location.toLowerCase().includes(searchTerm)
    );
    setDisplayData(filteredData);
  };

  const allData = {
    jobs,
    college,
    research,
    internships,
    volunteering,
    misc,
  };

  useEffect(() => {
    if (category && allData[category]) {
      setDisplayData(allData[category]);
      setCategoryData(allData[category]);
    } else {
      const combined = Object.values(allData).flat();
      setDisplayData(combined);
      setCategoryData(combined);
    }
  }, [category]);

  return (
    <main className="job-hub-page">
      <div className="job-hub-content">
        <div className="title-banner job-hub-banner">
          <span className="title-inner">THE PATH CLUB: JOBS</span>
        </div>
        <div className="job-hub-inner">
          <form className="job-search-form">
            <input
              className="job-search-input"
              type="text"
              placeholder="Search jobs..."
              onChange={(e) => handleSearch(e)}
            />
            <select
              className="job-category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="jobs">Jobs</option>
              <option value="college">College</option>
              <option value="research">Research</option>
              <option value="internships">Internships</option>
              <option value="volunteering">Volunteering</option>
              <option value="misc">Misc</option>
            </select>
          </form>
          <div className="job-results">
            {displayData.map((item, idx) => (
              <div key={idx} className="job-card">
                <h3>{item.title}</h3>
                <p>
                  <strong>Location:</strong> {item.location}
                </p>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View More
                </a>
              </div>
            ))}
          </div>
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
