

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Jobs from './Pages/Jobs'
import Jobcard1 from './Pages/Jobcard1'
import Profile from './Pages/Profile'
import Settings from './Pages/Settings'
import Jobcard2 from './Pages/Jobcard2'
import Login from './Login/Login'
import Internship from './Find Internships/Internships'

function App() {
  

  return (
    <div>
    
    <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/dashboard" element={<Dashboard />} /> 
     <Route path="/jobs" element={<Jobs />} />
     <Route path="/jobcard1" element={<Jobcard1/>} />
     <Route path="/profile" element={<Profile/>} />
     <Route path="/setting" element={<Settings/>} />
     <Route path="/jobcard2" element={<Jobcard2/>} />
     <Route path="/Internship" element={<Internship/>} />
     <Route path="/Profile" element={<Profile/>} />
     <Route path="/Login" element={<Login/>} />
     
    </Routes>
    
    </div>
  )
}

export default App
