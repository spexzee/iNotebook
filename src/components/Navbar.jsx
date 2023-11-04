import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/notebook3.png'


const Navbar = (props) => {

    const { showAlert } = props;

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        showAlert('Loged out Successfully', 'success')
        window.location.href = './login';
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark w-100`}>
                <div className="container-fluid">
                    <Link style={{ userSelect: 'none', fontWeight: 600, fontSize: '25px' }} className="navbar-brand" to="/">
                        <img src={logo} alt="logo" height={24} width={30} />
                        iNote-Book
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
                        {!localStorage.getItem('auth-token')
                            ? <form className="d-flex">
                                <Link className="btn btn-primary mx-1" to="/login" role="button">Log In</Link>
                                <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign Up</Link>
                            </form>
                            : <button onClick={handleLogout} className="btn btn-primary mx-2">Log Out</button>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar