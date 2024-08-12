import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faHouse, faBookmark, faNewspaper, faCog, faBars, faSearch,
  faMapMarkerAlt, faCalendarDay, faHourglassHalf, faUsers, faClock, faTimes,
  faChartLine, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import './Internships.css';
import myimage from "../Find Internships/avatar.jpg";
import nvidiaimage from "../Find Internships/icons8-nvidia.svg";
import metaimage from "../Find Internships/icons8-meta.svg";
import samsungimage from "../Find Internships/icons8-samsung.svg";
import intelimage from "../Find Internships/intel.svg";
import tataimage from "../Find Internships/tcs.svg";
import googleimage from "../Find Internships/icons8-google.svg";

import { NavLink } from "react-router-dom";

const cardData = [
  {
    company: 'Nvidia',
    position: 'UI/UX, Data Engineer',
    location: 'India',
    time: '1 min ago',
    type: '1 month',
    applicants: 100,
    salary: '5k',
    image: nvidiaimage,
    divisions: 'Data Engineer',
    link: '/Icard1'
  },
  {
    company: 'Meta',
    position: 'Data Scientist',
    location: 'USA',
    time: '10 mins ago',
    type: '1 Year',
    applicants: 130,
    salary: '6k',
    image: metaimage,
    divisions: 'Data Science',
    link: '/Icard2'
  },
  {
    company: 'Samsung',
    position: 'Product Data Analyst',
    location: 'India',
    time: '1 hour ago',
    type: '6 months',
    applicants: 240,
    salary: '10k',
    image: samsungimage,
    divisions: 'Product Analytics',
    link: '/Icard3'
  },
  {
    company: 'Intel',
    position: 'Data Engineer',
    location: 'India',
    time: '3 months',
    type: 'Full-time',
    applicants: 180,
    salary: '7.5k',
    image: intelimage,
    divisions: 'Data Engineering',
    link: '/Icard4'
  },
  {
    company: 'TCS',
    position: 'Business Intelligence Analyst',
    location: 'India',
    time: '10 mins ago',
    type: '6months',
    applicants: 100,
    salary: '10k',
    image: tataimage,
    divisions: 'Data Science',
    link: '/Icard5'
  },
  {
    company: 'Google',
    position: 'Data Science, Data Engineer',
    location: 'USA',
    time: '7 min ago',
    type: '8 months',
    applicants: 400,
    salary: '26k',
    image: googleimage,
    divisions: 'Data Engineer',
    link: '/Icard6'
  },
  
];

const Internship = () => {
  return (
    <div>
      <div className="body-25">
        <div className="sidebar-25">
          <h1 className="logo-25">JobHunt</h1>
          <div className="menus-25">
            <NavLink to="/"><FontAwesomeIcon icon={faHouse} className="fa-icon-25" />Home</NavLink>
            <NavLink to="/dashboard"><FontAwesomeIcon icon={faNewspaper} className="fa-icon-25" />Dashboard</NavLink>
            <NavLink to="#"><FontAwesomeIcon icon={faChartLine} className="fa-icon-25" />Performance</NavLink>
            <NavLink to="#"><FontAwesomeIcon icon={faBookmark} className="fa-icon-25" />Saved Jobs</NavLink>
            <NavLink to="#"><FontAwesomeIcon icon={faEnvelope} className="fa-icon-25" />Message</NavLink>
            <NavLink to="/setting"><FontAwesomeIcon icon={faCog} className="fa-icon-25" />Setting</NavLink>
            <a href="/signup" className="logout-jobs-25"><FontAwesomeIcon icon={faSignOutAlt} className="fa-icon-25"/><span className="text"> Logout</span></a>
          </div>

          <NavLink to="/profile"><div className="profile-25">
           <img className="profile-img-25" src={myimage} alt="Profile" /> 
            <div className="profile-name-25">
              <h4>Jessica Halle</h4>
              <p>Data Science</p>
            </div>
          </div>
          </NavLink>
        </div>
      </div>

      <div className="main-25">
        <div className="main-header-25">
          <FontAwesomeIcon icon={faBars} className="menu-bar-25" />
          <div className="search-25">
            <input type="text-new-25" placeholder=" Search Internship here..." />
            <button className="btn-search-25"><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>

        <div className="filter-wrapper-25">
          <p>Recommendation</p>
          <div className="filter-25">
            <button className="btn-filter-25">Data Science</button>
            <button className="btn-filter-25">Data Engineer</button>
            <button className="btn-filter-25">Data Analyst</button>
            <button className="btn-filter-25">Data Visualization</button>
            <button className="btn-filter-25">CRM Analyst</button>
          </div>
        </div>

        <div className="sort-25">
          <p>Sort</p>
          <div className="sort-list-25">
            <select>
              <option value="0">All</option>
              <option value="1">Full Time</option>
              <option value="2">Part Time</option>
              <option value="3">Recent</option>
              <option value="4">Highest Paid</option>
            </select>
          </div>
        </div>

        <div className="wrapper-25">
          {cardData.map((card, index) => (
            <NavLink to={card.link} key={index}>
              <div className={`card-25 ${card.bgColor}`}>
                <div className="card-left-25 yellow-bg-25">
                  <img src={card.image} alt={card.company} />
                </div>
                <div className="card-center-25">
                  <h3>{card.company}</h3>
                  <p className="card-detail-25">{card.position}</p>
                  <p className="card-loc-25">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    {card.location}
                  </p>
                  <div className="card-sub-25">
                    <p><FontAwesomeIcon icon={faClock} className="icon-container-25" /> {card.time}</p>
                    <p><FontAwesomeIcon icon={faHourglassHalf} /> {card.type}</p>
                    <p><FontAwesomeIcon icon={faUsers} /> {card.applicants} Applicants</p>
                  </div>
                </div>
                <div className="card-right-25">
                  <div className="card-tag-25">
                    <h5>Divisions</h5>
                    <a href="#">{card.divisions}</a>
                  </div>
                  <div className="card-salary-25">
                    <p><b>{card.salary}</b> <span>/ month</span></p>
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

export default Internship;
