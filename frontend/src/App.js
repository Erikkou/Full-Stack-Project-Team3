// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundSection from './components/BackgroundSection';
import MainContent from './components/MainContent';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignUpPage';
// import AdminDashboard from './components/AdminDashboard';
import AdminLayout from "./components/AdminLayout";
import CompetitionsPage from "./pages/CompetitionsPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <BackgroundSection>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* <Route path="/admin" element={<AdminDashboard />} /> */}
            <Route path="/admin" element={<AdminLayout><div>Dashboard</div></AdminLayout>}/>
            <Route path="/admin/competitions" element={<AdminLayout><CompetitionsPage /></AdminLayout>}/>
          </Routes>
        </BackgroundSection>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
