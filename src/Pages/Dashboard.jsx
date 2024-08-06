import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import myimage from "../Image/avatar-jessica.jpeg";
import {faHome, faSmile, faSearch, faBars, faTimes, faBell, faCloudDownloadAlt, faTachometerAlt, faBriefcase, faChartLine, faComments, faUsers, faCog, faSignOutAlt, faXmark, faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  
  return (
    <div>
      <section id="sidebar">
        <a href="#" className="brand">
          <FontAwesomeIcon icon={faSmile} />
          <span className="text">JobHunt</span>
        </a>
        <ul className="side-menu top">
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} />
              <span className="text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/jobs">
              <FontAwesomeIcon icon={faBriefcase} />
              <span className="text">Jobs</span>
            </NavLink>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faChartLine} />
              <span className="text">Performance</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faComments} />
              <span className="text">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUsers} />
              <span className="text">Applicants</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCog} />
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          
          
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <FontAwesomeIcon icon={ faSearch} />
              </button>
            </div>
          </form>
          <a href="#" className="notification">
            <FontAwesomeIcon icon={faBell} />
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src={myimage} alt="Profile" />
          </a>
        </nav>

        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                
                <li>
                  <a className="active" href="#">Home</a>
                </li>
              </ul>
            </div>
            <a href="#" className="btn-download">
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
              <span className="text">Download PDF</span>
            </a>
          </div>

          <ul className="box-info">
            <li>
              <FontAwesomeIcon icon={faBriefcase} className="icon" />
              <span className="text">
                <h3>120</h3>
                <p>New Jobs</p>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} className="icon" />
              <span className="text">
                <h3>350</h3>
                <p>Applicants</p>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartLine} className="icon" />
              <span className="text">
                <h3>45%</h3>
                <p>Conversion Rate</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Applications</h3>
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Applicant</th>
                    <th>Date Applied</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={myimage} alt="Applicant" />
                      <p>Jessica Halle</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status completed">Reviewed</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src={myimage} alt="Applicant" />
                      <p>Jessica Halle</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status pending">Pending</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src={myimage} alt="Applicant" />
                      <p>Jessica Halle</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status process">Interview</span></td>
                  </tr>
                  <tr>
                    <td>
                      <img src={myimage} alt="Applicant" />
                      <p>Jessica Halle</p>
                    </td>
                    <td>01-10-2021</td>
                    <td><span className="status process">Interview</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='new-grid-dash-43'>
              <span>Your Activity</span>
              <br></br>
              <p>This Month</p>
              <br></br>
              <div class="grid-container-dash-43">
              
               <div class="grid-item active"></div>
               <div class="grid-item inactive"></div>
               <div class="grid-item active" ></div>
               <div class="grid-item inactive" ></div>
               <div class="grid-item active" ></div>
               <div class="grid-item inactive"></div>
               <div class="grid-item active"></div>
               <div class="grid-item active" ></div>
               <div class="grid-item inactive"></div>
               <div class="grid-item active" ></div>
               <div class="grid-item inactive" ></div>
               <div class="grid-item inactive"></div>
               <div class="grid-item active" ></div>
               <div class="grid-item inactive" ></div>
               <div class="grid-item active"></div>
               <div class="grid-item inactive"></div>
               <div class="grid-item active"></div>
               <div class="grid-item inactive"></div>
               <div class="grid-item inactive" ></div>
               <div class="grid-item active" ></div>
               <div class="grid-item inactive" ></div>
               <div class="grid-item active" ></div>
               <div class="grid-item inactive" ></div>
               <div class="grid-item active" ></div>
               <div class="grid-item inactive" ></div>
               <div class="grid-item active" ></div>
               <div class="grid-item inactive"></div>
               <div class="grid-item active" ></div>
               <div class="grid-item inactive" ></div>
               <div class="grid-item active" ></div>
               <div class="grid-item active" ></div>
               <div class="grid-item nil-43" ></div>
               <div class="grid-item nil-43" ></div>
               <div class="grid-item nil-43" ></div>
               <div class="grid-item nil-43" ></div>
               <div class="grid-item nil-43" ></div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Dashboard;