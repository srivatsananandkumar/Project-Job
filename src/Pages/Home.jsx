import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import myimage from "../Image/avatar-jessica.jpeg";
import {NavLink} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Job<span>Hunt</span></div>
        <nav>
          <ul>
            <li><NavLink to="/jobs">Jobs</NavLink></li>
            <li><NavLink to="/internship">Internship</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><a href="#search-home-43">Browse</a></li>
          </ul>
        </nav>
        <div className="profile">
          <img src={myimage} alt="Profile" />
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="tagline">No. 1 Job Hunt Website</div>
          <h1>Search, Apply & Get Your <span>Dream Jobs</span></h1>
          <p></p>
          <div className="search-bar">
            <input type="text" placeholder="Find your dream jobs" />
            <button id="search-home-43">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="job-categories">
            <button>Frontend Developer</button>
            <button>Backend Developer</button>
            <button>Data Engineer</button>
          </div>
        </section>
        <section className="job-openings">
          <h2>Latest and Top <span>Job Openings</span></h2>
          <br>
          </br>
          <div className="job-list">
            <div className="job-card">
              <h3>Google</h3>
              <p>India</p>
              <h4>FullStack Developer</h4>
              <p>I need senior Fullstack developer, who can able to write the efficient code. And deal with frontend and backend both</p>
              <div className="job-details">
                <span id='job1-43'>2 Positions</span>
                <span id='job2-43'>Full Time</span>
                <span id='job3-43'>45LPA</span>
              </div>
            </div>
            <div className="job-card">
              <h3>Microsoft India</h3>
              <p>India</p>
              <h4>FullStack Developer</h4>
              <p>I need senior Fullstack developer, who can able to write the efficient code. And deal with frontend and backend both</p>
              <div className="job-details">
                <span id='job1-43'>2 Positions</span>
                <span id='job2-43'>Full Time</span>
                <span id='job3-43'>23LPA</span>
              </div>
            </div>
            <div className="job-card">
              <h3>JobHunt</h3>
              <p>India</p>
              <h4>FullStack Developer</h4>
              <p>I need senior Fullstack developer, who can able to write the efficient code. And deal with frontend and backend both</p>
              <div className="job-details">
                <span id='job1-43'>4 Positions</span>
                <span id='job2-43'>Full Time</span>
                <span id='job3-43'>34LPA</span>
              </div>
            </div>
            <div className="job-card">
              <h3>JobHunt</h3>
              <p>India</p>
              <h4>Backend Developer</h4>
              <p>I need backend developer who can make professional ui web pages.</p>
              <div className="job-details">
                <span id='job1-43'>5 Positions</span>
                <span id='job2-43'>Full Time</span>
                <span id='job3-43'>12LPA</span>
              </div>
            </div>
            <div className="job-card">
              <h3>JobHunt</h3>
              <p>India</p>
              <h4>Frontend Developer</h4>
              <p>I need frontend developer who can make professional ui web pages.</p>
              <div className="job-details">
                <span id='job1-43'>12 Positions</span>
                <span id='job2-43'>Full Time</span>
                <span id='job3-43'>14LPA</span>
              </div>
            </div>
            <div className="job-card">
              <h3>JobHunt</h3>
              <p>India</p>
              <h4>Backend Developer</h4>
              <p>I need backend developer who can make professional ui web pages.</p>
              <div className="job-details">
                <span id='job1-43'>5 Positions</span>
                <span id='job2-43'>Full Time</span>
                <span id='job3-43'>12LPA</span>
              </div>
            </div>
            <div className="job-card">
              <h3>JobHunt</h3>
              <p>India</p>
              <h4>Backend Developer</h4>
              <p>I need backend developer who can make professional ui web pages.</p>
              <div className="job-details">
                <span id='job1-43'>5 Positions</span>
                <span id='job2-43'>Full Time</span>
                <span id='job3-43'>12LPA</span>
              </div>
            </div>
            <div className="job-card">
              <h3>JobHunt</h3>
              <p>India</p>
              <h4>Backend Developer</h4>
              <p>I need backend developer who can make professional ui web pages.</p>
              <div className="job-details">
                <span id='job1-43'>5 Positions</span>
                <span id='job2-43'>Full Time</span>
                <span id='job3-43'>12LPA</span>
              </div>
            </div>

            
          </div>
        </section>
        <NavLink to="/jobs">
        <button className='home-button-new-43'>Explore All Jobs</button>
        </NavLink>
      </main>
    </div>
  );
}

export default App;
