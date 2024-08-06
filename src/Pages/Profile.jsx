import React from 'react';
import './Profile.css';
import profileImage from '../Image/avatar-jessica.jpeg';
import { NavLink } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div>
    <header className='header-profile-43'>
    <div className="logo-profile-43">Job<span>Hunt</span></div>
    <nav className='profile-navbar-43'>
      <ul>
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/dashboard">Dashboard</NavLink></li>
       <li><NavLink to="/setting">Settings</NavLink></li>
      </ul>
    </nav>
    </header>
    <div className="profile-container-43">
      <div className="profile-header-43">
        <img src={profileImage} alt="Profile" className="profile-image-43" />
        <div className="profile-info-43">
          <h1 className="profile-name-43">Jessica Halle</h1>
          <p className="profile-title-43">Software Engineer</p>
        </div>
      </div>
      <div className="profile-details-43">
        <section className="profile-section-43">
          <h2 className="profile-section-title-43">About Me</h2>
          <p className="profile-section-content-43">
            Passionate software engineer with 5 years of experience in web development and a strong background in JavaScript frameworks.
          </p>
        </section>
        <section className="profile-section-43">
          <h2 className="profile-section-title-43">Skills</h2>
          <ul className="profile-skills-43">
            <li className="profile-skill-43">JavaScript</li>
            <li className="profile-skill-43">React</li>
            <li className="profile-skill-43">Node.js</li>
            <li className="profile-skill-43">HTML/CSS</li>
          </ul>
        </section>
        <section className="profile-section-43">
          <h2 className="profile-section-title-43">Experience</h2>
          <div className="profile-experience-43">
            <h3 className="profile-experience-title-43">Software Engineer</h3>
            <p className="profile-experience-company-43">Tech Company</p>
            <p className="profile-experience-duration-43">Jan 2019 - Present</p>
            <p className="profile-experience-description-43">
              Developing and maintaining web applications using React and Node.js.
            </p>
          </div>
        </section>
        <section className="profile-section-43">
          <h2 className="profile-section-title-43">Education</h2>
          <div className="profile-education-43">
            <h3 className="profile-education-degree-43">B.Sc. in Computer Science</h3>
            <p className="profile-education-institution-43">University of XYZ</p>
            <p className="profile-education-duration-43">2015 - 2019</p>
          </div>
        </section>
      </div>
    </div>
   </div> 
  );
};

export default ProfilePage;
