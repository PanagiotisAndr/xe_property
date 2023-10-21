import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import '../Layout/Navbar.scss';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-light border">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={process.env.PUBLIC_URL + '/logo-nav.png'} alt="Navbar Logo" />
                </Link>
                <button onClick={toggleMenu} className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="navbar-collapse">
                        <p className="close-nav" onClick={toggleMenu}>x</p>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-uppercase" href="/create-ad">Add Listing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase" href="/properties-list">View Listings</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item m-2">
                            <Link className="nav-link text-uppercase" to="/create-ad">Add Listing</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link className="nav-link text-uppercase" to="/properties-list">View Listings</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
