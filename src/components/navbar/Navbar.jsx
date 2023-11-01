import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    return (
        <>

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} w-100`}>
                <div className="container-fluid">
                    <Link style={{ userSelect: 'none', fontWeight: 600, fontSize: '25px' }} className="navbar-brand" to="/">
                        TextUtils
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={{ userSelect: 'none', fontWeight: 600, fontSize: '19px' }} className="nav-link nav__bar" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ userSelect: 'none', fontWeight: 600, fontSize: '19px' }} className="nav-link nav__bar" to="/about">
                                    About
                                </Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-success" type="submit">
                                Search
                            </button>
                        </form> */}
                        {/* <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onClick={props.toggleMode}
                            />
                            <label style={{ userSelect: 'none' }} className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
                                {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
                            </label>
                        </div> */}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar