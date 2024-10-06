import React from 'react';
import Home from './components/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import AdminProfile from './components/ProfilePage/AdminProfile';
import StudentProfile from './components/ProfilePage/StudentProfile';
import AlumniProfile from './components/ProfilePage/AlumniProfile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<AuthPage />} />
          <Route path="/admin" element={<AdminProfile />} />
          <Route path="/student" element={<StudentProfile />} />
          <Route path="/alumni" element={<AlumniProfile />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
