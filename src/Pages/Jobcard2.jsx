import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHouse, faBookmark, faNewspaper, faCog , faBars, faSearch,faMapMarkerAlt,faCalendarDay, faHourglassHalf, faUsers, faClock, faTimes} from '@fortawesome/free-solid-svg-icons';
import myimage from "../Image/avatar-jessica.jpeg";
import googleimage from "../Image/icons8-google.svg";
import microsoftimage from "../Image/icons8-microsoft.svg";
import youtubeimage from "../Image/icons8-youtube.svg";
import appleimage from "../Image/icons8-apple.svg";
import amazonimage from "../Image/icons8-amazon.svg";
import {useNavigate} from "react-router-dom";
import './Jobcard1.css';


const Jobcard1 = () => {
  return (
 <div>   
    <div className='new-container-43'>
      <div className="detail-43">
             <FontAwesomeIcon icon={faTimes} className="close-detail-43" />
             <div className="deatil-header-43">
               <img src={microsoftimage}></img>
               <h2>Microsoft</h2>
               <p>Data Science</p>
             </div>
             <hr className="divider-43" />
             <div className="detail-desc-43">
              <div className="about-43">
                <h4>About Company</h4>
                <p>Microsoft Corporation is a global leader in software, services, devices, and solutions. The company is known for its Windows operating system, Office suite, Azure cloud computing, and innovative technologies like AI and gaming.</p>
                <a href="#">Read more</a>
              </div>
              <hr className="divider-43" />
              <div className="qualification-43">
                <h4>Qualification</h4>
                <ul>
                  <li><span>UG:</span> BCA in Any Specialization, B.Sc in Any Specialization, B.Tech/B.E. in Any Specialization</li>
                  <li><span>PG:</span> MS/M.Sc(Science) in Any Specialization, MCA in Any Specialization</li>
                  <li><span>Doctorate:</span> Doctorate Not Required</li>
                </ul>
                <br></br><br></br>
              </div>
             </div>
             <hr className="divider-43" />
             <div className="detail-btn-43">
               <button className="btn-apply-43">Apply Now</button>
               <button className="btn-save-43">Save job</button>
             </div>
          </div>

          <div className="content-job-43">
           <h1> Job description</h1>
           
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
            <p className='new-contact-google-43'>Contact us</p>
            
            <p><span>Mobile:</span> +91 7779777979</p>
            <p><span>Email:</span> microsoft@gmail.com</p>
            <p><span>Lan:</span> 083 083 083</p>

          </div>

    </div>
</div>
  )
}

export default Jobcard1
