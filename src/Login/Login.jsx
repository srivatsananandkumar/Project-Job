import React from 'react'
import {useRef, useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser,FaLock } from "react-icons/fa";
import './Login.css';
const Login = () => {
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState('');
//   const [pwd, setPwd] = useState('');
//   const [errMsg, setErrMsg] = useState('');

//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, [])

//   useEffect(() => {
//     setErrMsg('');
//   },[user, pwd])


  return (
    <div className='main-login-43'>
      <div className="wrapper-login-43">
        <form action="">
            <h1>Login</h1>
            <div className="input-box-login-43">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon-login-43'/>
            </div>
            <div className="input-box-login-43">
                <input type="text" placeholder='password' required />
                <FaLock className='icon-login-43'/>
            </div>

            <div className="remember-forgot-login-43">
               <label><input type="checkbox" />Remember me</label>
               <NavLink to="#">Forgot password</NavLink>
            </div>

            <NavLink to="/"><button type="submit">Login</button></NavLink>

            <div className="register-link-login-43">
                <p>Don't have an account <NavLink to="#">Register</NavLink></p>
            </div>
        </form>
      </div>

    </div>
  )
}

export default Login;