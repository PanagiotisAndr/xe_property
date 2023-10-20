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
                                <a className="nav-link" href="/create-ad">Προσθήκη Αγγελίας</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/properties-list">Εμφάνιση Αγγελιών</a>
                            </li>
                        </ul>
                    </div>
                </div>




                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-ad">Προσθήκη Αγγελίας</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/properties-list">Εμφάνιση Αγγελιών</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
