import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import img from '../../assets/CollegeLogo.png'

 const Navbar = (props) => {
    const club="<club/>"
    //let auth = JSON.parse(localStorage.getItem('auth'));
    return (
        props.auth ? 
        <nav className="nav" id="nav">
            <div className="logo">
                <img src={img} alt="logo" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">Events</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="#footer">Contact Us</Link></li>
                <li><Link to="/logout" className="login">Sign Out</Link></li>
                <li><Link to="/profile" className="register">Profile</Link></li>
                <li></li>
            </ul>
        </nav>
        :
        <nav className="nav" id="nav">
            <div className="logo"><img src={img} alt="" /></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">Events</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="blogs">Blogs</Link></li>
                <li><Link to="#footer">Contact Us</Link></li>
                <li><Link to="/login" className="login">Sign In</Link></li>
                <li><Link to="/register" className="register">Sign Up</Link></li>
                <li></li>
            </ul>
        </nav>
    )
}
export default Navbar;