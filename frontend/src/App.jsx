import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Contact from './components/Contact/Contact';

function MainContent() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


return (
    <div>
       {location.pathname !== '/Signup' && location.pathname !== '/' && (
        <Navbar isLoggedIn={isLoggedIn} />
      )}
      <Routes>
        <Route
          path="/"
          element={<Login onLogin={() => setIsLoggedIn(true)} />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />
         <Route path="/about" element={<About />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
     
    </div>
  );
}

function App() {

  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;

