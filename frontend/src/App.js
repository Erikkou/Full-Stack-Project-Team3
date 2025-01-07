import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
import UserManagement from "./pages/UserManagement";
import UserDashboard from "./components/UserDashboard";
import MatchScheduling from "./pages/MatchScheduling";
import ResultsAndStandings from "./pages/ResultsAndStandings";
import Blogs from "./pages/Blogs";
import {AuthProvider} from "./AuthContext";
import Profile from "./components/Profile";

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Navbar/>
                    <BackgroundSection>
                        <Routes>
                            <Route path="/" element={<MainContent/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/signup" element={<SignupPage/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/admin" element={<AdminLayout>Admin Content</AdminLayout>}/>
                            <Route path="/admin/league-management" element={<LeagueManagement/>}/>
                            <Route path="/admin/team-management" element={<TeamManagement/>}/>
                            <Route path="/admin/user-management" element={<UserManagement/>}/>
                            <Route path="/admin/match-scheduling" element={<MatchScheduling/>}/>
                            <Route path="/admin/results-and-standings" element={<ResultsAndStandings/>}/>
                            <Route path="/admin/blogs" element={<Blogs/>}/>
                            <Route path="/dashboard" element={<UserDashboard/>}/>
                        </Routes>
                    </BackgroundSection>
                    <Footer/>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
