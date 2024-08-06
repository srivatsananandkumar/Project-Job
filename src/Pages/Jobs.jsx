import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHouse, faBookmark, faNewspaper, faCog , faBars, faSearch, faMapMarkerAlt, faCalendarDay, faHourglassHalf, faUsers, faClock, faTimes, faChartLine, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import './Jobs.css';
import myimage from "../Image/avatar-jessica.jpeg";
import googleimage from "../Image/icons8-google.svg";
import microsoftimage from "../Image/icons8-microsoft.svg";
import youtubeimage from "../Image/icons8-youtube.svg";
import appleimage from "../Image/icons8-apple.svg";
import amazonimage from "../Image/icons8-amazon.svg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const cardData = [
  {
    company: 'Google',
    position: 'Data Science, Data Engineer',
    location: 'Abcd street',
    time: '1 min ago',
    type: 'Full-time',
    applicants: 200,
    salary: '20L',
    image: googleimage,
    divisions: 'Data Engineer',
    link: '/jobcard1'
  },
  {
    company: 'Microsoft',
    position: 'Data Analyst, Product Analyst',
    location: 'Abcd street',
    time: '10 mins ago',
    type: 'Full-time',
    applicants: 130,
    salary: '24L',
    image: microsoftimage,
    divisions: 'Data Science',
    link: '/jobcard2'
  },
  {
    company: 'Youtube',
    position: 'Data Analyst, Product Analyst',
    location: 'Abcd street',
    time: '1 hour ago',
    type: 'Full-time',
    applicants: 240,
    salary: '14L',
    image: youtubeimage,
    divisions: 'Data Science',
    link: '/jobcard2'
  },
  {
    company: 'Apple',
    position: 'Data Analyst, Product Analyst',
    location: 'Abcd street',
    time: '10 mins ago',
    type: 'Full-time',
    applicants: 180,
    salary: '24L',
    image: appleimage,
    divisions: 'Data Science',
    link: '/jobcard2'
  },
  {
    company: 'Amazon',
    position: 'Data Analyst, Product Analyst',
    location: 'Abcd street',
    time: '10 mins ago',
    type: 'Full-time',
    applicants: 330,
    salary: '24L',
    image: amazonimage,
    divisions: 'Data Science',
    link: '/jobcard2'
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="body-43">
        <div className="sidebar-43">
          <h1 className="logo-43">JobHunt</h1>
          <div className="menus-43">
            <NavLink to="/"><FontAwesomeIcon icon={faHouse} className="fa-icon-43" />Home</NavLink>
            <NavLink to="/dashboard"><FontAwesomeIcon icon={faNewspaper} className="fa-icon-43" />Dashboard</NavLink>
            <a href="#"><FontAwesomeIcon icon={faChartLine} className="fa-icon-43" />Performance</a>
            <a href="#"><FontAwesomeIcon icon={faBookmark} className="fa-icon-43" />Saved Jobs</a>
            <a href="#"><FontAwesomeIcon icon={faEnvelope} className="fa-icon-43" />Message</a>
            <a href="#"><FontAwesomeIcon icon={faCog} className="fa-icon-43" />Setting</a>
            <a href="#" className="logout-jobs-43"><FontAwesomeIcon icon={faSignOutAlt} className="fa-icon-43"/><span className="text"> Logout</span></a>
          </div>

          <div className="profile-43">
            <img className="profile-img-43" src={myimage} alt="Profile" />
            <div className="profile-name-43">
              <h4>Jessica Halle</h4>
              <p>Data Science</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-43">
        <div className="main-header-43">
          <FontAwesomeIcon icon={faBars} className="menu-bar-43" />
          <div className="search-43">
            <input type="text" placeholder="Search your best job here..." />
            <button className="btn-search-43"><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="filter-wrapper-43">
          <p>Recommendation</p>
          <div className="filter-43">
            <button className="btn-filter-43">Data Science</button>
            <button className="btn-filter-43">Data Engineer</button>
            <button className="btn-filter-43">Data Analyst</button>
            <button className="btn-filter-43">Data Visualization</button>
            <button className="btn-filter-43">CRM Analyst</button>
          </div>
        </div>

        <div className="sort-43">
          <p>Sort</p>
          <div className="sort-list-43">
            <select>
              <option value="0">All</option>
              <option value="1">Full Time</option>
              <option value="2">Part Time</option>
              <option value="3">Recent</option>
              <option value="4">Highest Paid</option>
            </select>
          </div>
        </div>

        <div className="wrapper-43">
          {cardData.map((card, index) => (
            <NavLink to={card.link} key={index}>
              <div className={`card-43 ${card.bgColor}`}>
                <div className="card-left-43 yellow-bg-43">
                  <img src={card.image} alt={card.company} />
                </div>
                <div className="card-center-43">
                  <h3>{card.company}</h3>
                  <p className="card-detail-43">{card.position}</p>
                  <p className="card-loc-43">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    {card.location}
                  </p>
                  <div className="card-sub-43">
                    <p><FontAwesomeIcon icon={faClock} className="icon-container-43" /> {card.time}</p>
                    <p><FontAwesomeIcon icon={faHourglassHalf} /> {card.type}</p>
                    <p><FontAwesomeIcon icon={faUsers} /> {card.applicants} Applicants</p>
                  </div>
                </div>
                <div className="card-right-43">
                  <div className="card-tag-43">
                    <h5>Divisions</h5>
                    <a href="#">{card.divisions}</a>
                  </div>
                  <div className="card-salary-43">
                    <p><b>{card.salary}</b> <span>/ year</span></p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jobs;
