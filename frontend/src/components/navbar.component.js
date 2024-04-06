import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { getCatch, removeCatch } from '../catching-mechanism/catch';

const Navbar = () => {
    const [loggedUser, setLoggedUser] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        setLoggedUser(getCatch('loggedUser'));
    },[loggedUser])

    const handleLogout =()=>{
        removeCatch('loggedUser');
        setLoggedUser(null);
        navigate('/');
        window.location.reload();
    }
    
    if(!loggedUser)
    {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={'/sign-in'}>
                        PlanItShare
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                <Link className="nav-link" to={'/sign-in'}>
                                    Login
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to={'/sign-up'}>
                                    Sign Up
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    if(loggedUser)
    {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={'/sign-in'}>
                    PlanItShare
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to={'/home'}>
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={'/allplans'}>
                            All Plans
                        </Link>
                        </li>
                        <li className="nav-item">
                            <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        )  
    }
}

export default Navbar