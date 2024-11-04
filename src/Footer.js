import React from 'react';
import './Footer.css';
import logo from './img/logo/KHYS-Logo.png';
import linkedin from './img/icons/linkedin.png';
import face from './img/icons/facebook.png';
import insta from './img/icons/instagram.png';
import x from './img/icons/twitter.png';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className='social'>
                    <img src={linkedin} alt="linkedin" />
                    <span style={{marginLeft: '10px'}}>Join us on LinkedIn</span>
                </div>
                <div className='social'>
                    <img src={face} alt="facebook" />
                    <span style={{marginLeft: '10px'}}>Follow us Facebook</span>
                </div>
                <div className='social'>
                    <img src={x} alt="twitter" />
                    <span style={{marginLeft: '10px'}}>Follow us Twitter</span>
                </div>
                <div className='social'>
                    <img src={insta} alt="insta" />
                    <span style={{marginLeft: '10px'}}>Follow us Instagram</span>
                </div>
            </div>

            <div className="footer-center">
                <img src={logo} alt="Logo" />
            </div>

            <div className="footer-right">
                
            <div className='sociall'><p><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></p></div>
            <div className='sociall'><p><Link activeClass="active" to="services" spy={true} smooth={true}>Products</Link></p></div>
            <div className='sociall'><p><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></p></div>
            <div className='sociall'><p><Link activeClass="active" to="contact" spy={true} smooth={true}>Contacts</Link></p></div>
            </div>
        </div>
    );
}

export default Footer;