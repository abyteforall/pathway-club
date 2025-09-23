import "../styles/Calendar.css";
import { Link } from "react-router-dom";

function Calendar() {
  return (
    <main className="calendar-page">
      <div className="calendar-content">
        <div className="title-banner calendar-banner">
          <span className="title-inner">CALENDAR</span>
        </div>
        <div className="calendar-inner">
          <div className="calendar-reminders">
            <h2>Reminders</h2>
            <ul>
              <li>
                <h2>Meetings will be held once a month on a Wednesday</h2>
              </li>
              <li>
                <h2>The October meeting will be on the 22nd!</h2>
              </li>
            </ul>
          </div>
          <div className="calendar-calendar">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=thepathclub25%40gmail.com&ctz=America%2FChicago"
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="calendar-btn-rotate-wrapper">
        <div className="button-wrap calendar-home-button">
          <Link to="/" className="arrow-nav-button calendar-home-link">
            HOME
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Calendar;
