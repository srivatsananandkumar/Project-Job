import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHouse, faBookmark, faNewspaper, faCog , faBars, faSearch,faMapMarkerAlt,faCalendarDay, faHourglassHalf, faUsers, faClock, faTimes} from '@fortawesome/free-solid-svg-icons';
import myimage from "../Find Internships/avatar.jpg";
import nvidiaimage from "../Find Internships/icons8-nvidia.svg";
import metaimage from "../Find Internships/icons8-meta.svg";
import samsungimage from "../Find Internships/icons8-samsung.svg";
import intelimage from "../Find Internships/intel.svg";
import tataimage from "../Find Internships/tcs.svg";
import googleimage from "../Find Internships/icons8-google.svg";
import {useNavigate} from "react-router-dom";
import './Icard1.css';
import { NavLink } from 'react-router-dom';

const handleClick = () => {
    alert('Internship Applied!!');
    console.log('Internship Applied.');
  };
  const handClick = () => {
    alert('Internship Saved!!');
    console.log('Internship Saved.');
  };

const Icard6 = () => {
  return (
 <div>   
    <div className='new-container-25'>
      <div className="detail-25">
             <NavLink to="/Internships"><FontAwesomeIcon icon={faTimes} className="close-detail-25" /></NavLink>
             <div className="detail-header-25">
               <img src={googleimage}></img>
               <h2>Google</h2>
               <p>Data Science</p>
             </div>
             <hr className="divider-25" />
             <div className="detail-desc-25">
              <div className="about-25">
                <h4>About Company</h4>
                <p>Google LLC is a leading technology company specializing in internet services, including search, advertising, cloud computing, and various innovative technologies.</p>
              </div>
              <hr className="divider-25" />
              <div className="qualification-25">
                <h4>Qualification</h4>
                <ul>
                  <li><span>UG:</span> BCA in Any Specialization, B.Sc in Any Specialization, B.Tech/B.E. in Any Specialization</li>
                  <li><span>PG:</span> MS/M.Sc(Science) in Any Specialization, MCA in Any Specialization</li>
                  <li><span>Doctorate:</span> Doctorate Not Required</li>
                </ul>
                <br></br><br></br>
              </div>
             </div>
             <hr className="divider-25" />
             <div className="detail-btn-25">
             <NavLink to="/Internships"> <button className="btn-apply-25" onClick={handleClick}>Apply Now</button></NavLink>
             <NavLink to="/Internships"> <button className="btn-save-25" onClick={handClick}>Save Now</button></NavLink>             </div>
          </div>

          <div className="content-job-25">
           <h1> Internship description</h1>
           
           <p>Good knowledge in Java ,C,C++ is mandatory.
           
            Strong knowledge in OOPs concepts, J2EE, HTML, CSS, SQL.
           
            Logical and analytical thinking towards any programming language.
           
            Should have designed at least one project module using object oriented analysis
           
            and design techniques Sound knowledge of modern software architecture and<br></br> development techniques.
          
            Should be a self initiator and interested in learning new technologies.
           
            Good analytical and logical skills.
           
            Excelling problem solving skills with an out of the box approach.</p><br></br>
            
            <p><span>Location:</span> Delhi / NCR,Bangalore/Bengaluru,Hyderabad/<br></br>Secunderabad,<br></br>Chennai,Pune,Kolkata,Ahmedabad,Mumbai</p>
            <br></br><br></br>
            <p className='new-contact-google-25'>Contact us:</p>
            
            <p><span>Mobile:</span> +91 8889888989</p>
            <p><span>Email:</span> google@gmail.com</p>
            <p><span>Lan:</span> 083 083 083</p>

          </div>

    </div>
</div>
  )
}

export default Icard6;
