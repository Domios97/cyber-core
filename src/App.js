import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import SignUpPage from './Pages/SignUp/SignUpPage';
import LoginPage from './Pages/Login/loginpage';


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </Router>
  );
};

export default App;

