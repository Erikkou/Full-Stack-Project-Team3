import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackgroundSection from "./components/BackgroundSection";
import MainContent from "./components/MainContent";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignUpPage";
import AdminLayout from "./pages/AdminLayout";
import LeagueManagement from "./pages/LeagueManagement";
import TeamManagement from "./pages/TeamManagement";
import UserDashboard from "./components/UserDashboard";
import { AuthProvider } from "./AuthContext"; // Voeg de AuthProvider toe

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <BackgroundSection>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/admin" element={<AdminLayout>Admin Content</AdminLayout>} />
              <Route path="/admin/league-management" element={<LeagueManagement />} />
              <Route path="/admin/team-management" element={<TeamManagement />} />
              <Route path="/dashboard" element={<UserDashboard />} />
            </Routes>
          </BackgroundSection>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
