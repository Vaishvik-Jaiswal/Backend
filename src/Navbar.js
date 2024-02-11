import React from 'react';
import Logo from './assets/Logo.png';
import './Navbar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Router>        <div className="landing-page">
            <nav className="navbar">
                <div className="logo">
                    <img className="LOGO" src={Logo} alt="Logo" />
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
        </div>  </Router>

    );
}

export default Navbar;