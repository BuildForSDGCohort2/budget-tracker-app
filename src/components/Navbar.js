import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/search">About</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/reviews">Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-in">Sign-in</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/budget">Budget</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}