import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import img from '../../assets/CodingClub.jpeg'

export default function Footer() {
    const code="<code/>"
    return (
        <footer className="footer" id="footer">
            <div className="logo">
                <img src={img} alt="" />
            </div>
            <div className="footer_content">
                <div className="col">
                     <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">Events</Link></li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="#">Contact Us</Link></li>
                <li><Link to="/login" className="login">Sign In</Link></li>
                <li><Link to="/register" className="register">Sign Up</Link></li>
                <li></li>
            </ul>
                </div>
                <div className="col">
                    <div className="item">Contact: 033 2324 2050</div>
                    <div className="item">Address: 1/1, Service Rd, DG Block(Newtown), Action Area I, Newtown, Kolkata, West Bengal 700156</div>
                    <div className="item">Email: admission.desk@tict.edu.in</div>
                    <div className="item">Official website: <a href="https://tint.edu.in/" target="blank">Techno India</a></div>
                </div>
                <div className="col">
                    <label htmlFor="contactEmail">Email Us</label>
                    <br />
                    <input type="email" name="contactEmail" placeholder="Your email" />
                    <br />
                    <div className="btn btn-contact">Contact Us</div>
                </div>
            </div>
            <div className="copyright">Copyright ©2021 Techno International New Town Coding Club. </div>
        </footer>
    )
}
