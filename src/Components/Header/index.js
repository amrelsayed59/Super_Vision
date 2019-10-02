import React from 'react'
import {NavLink, Link} from 'react-router-dom'



const Header = () => {
    return (
        <section id="feat" className="header">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-3">
                            <div className="img-logo">
                                <Link to="/">
                                    <img src="imgs/logo.png" alt="Logo"/>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-9">
                            <button className="navbar-toggler" type="button" 
                                data-toggle="collapse" data-target="#main-nav" 
                                aria-controls="navbarSupportedContent" aria-expanded="false" 
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
        
                            <div className="collapse navbar-collapse" id="main-nav">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <NavLink exact activeClassName="selected" className="nav-link"  to="/" data-value="feat">Home</NavLink>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Super&nbsp;Vision
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <NavLink activeClassName="selected" className="dropdown-item" to="/about-us">About Us </NavLink>
                                            <NavLink activeClassName="selected" className="dropdown-item" to="/blogs">Our Blogs</NavLink>
                                            <NavLink activeClassName="selected" className="dropdown-item" to="/our-media">Our Media</NavLink>
                                            <NavLink activeClassName="selected" className="dropdown-item" to="/why-us"> Why Us</NavLink>
                                        </div>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <NavLink activeClassName="selected" className="nav-link" to="/services" data-value="zort">Services</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink activeClassName="selected" className="nav-link" to="/events" data-value="zot">Events</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink activeClassName="selected" className="nav-link" to="/training-program" data-value="zort">Training&nbsp;Programs</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink activeClassName="selected" className="nav-link" to="/contact" data-value="zort">Contact&nbsp;Us</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink activeClassName="selected" className="nav-link" to="/create-account" data-value="zort">Login</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )

}
export default Header


