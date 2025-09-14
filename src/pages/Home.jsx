import Navbar from '../components/Navbar';

function Home() {
  return (
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
      </div>
    </div>
  );
}

export default Home;
