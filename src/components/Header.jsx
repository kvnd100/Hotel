import "./Header.css";
import Profile from "../assets/profile.svg";
import World from "../assets/world.svg";
import Mobile from "../assets/mobile.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img
          className="header-logo"
          src="https://s.shangri-la.com/sl-fe-hotel-prod/img/shangrila_en2021.a24c901.png"
          alt="logo"
        />
        <div className="header-links">
          <ul>
            <li>
              <img className="header-icons" src={Profile} alt="profile icon" />
              Sign In
            </li>
            <li>Join Now</li>
            <li>Find Reservations</li>
            <li>
              <img className="header-icons" src={World} alt="world icon" />
              English
            </li>
            <li>LKR</li>
            <li>
              <img
                className="header-icons"
                style={{ width: "18px", height: "18px", marginTop: "-2px" }}
                src={Mobile}
                alt="mobile icon"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="header-navbar">
        <nav>
          <ul>
            <li>
              <span className={`nav-item`}>
                ABOUT
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-arrow"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li>
              <span className={`nav-item`}>
                ROOM & SUITES
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-arrow"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li>
              <span className={`nav-item`}>
                DINING
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-arrow"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li>
              <span className={`nav-item`}>
                EXPERIENCE
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-arrow"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li>
              <span className={`nav-item`}>
                EVENTS
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-arrow"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li className="nav-item">GALLERY</li>
            <li className="nav-item">OFFERS</li>
            <li>
              <span className={`nav-item`}>
                MORE
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nav-arrow"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#fff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li className="nav-btn">
              <a href="#">FIND A HOTEL</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
