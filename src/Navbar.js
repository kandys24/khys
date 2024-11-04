import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import logo from './img/logo/KHYS-Logo.png';
import { IoCloseOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [menu, setMenu] = useState(false);

    // function to update the width state on window resize
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    // function to toggle the menu state
    const handleMenu = () => {
        setMenu(!menu);
    };

    // effect to add and remove the resize event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if(width > 500){
            setMenu(false);
        }

    }, [width]);

    return (
        <header className='headernavbar' style={{height: '80px'}}>
            <img  src={logo} alt='logo'/>
            {width < 500 ? ( // if the screen width is less than 500px, show the menu icon
                <div className="menu-icon" onClick={handleMenu}>
                {menu ? <IoCloseOutline size={40} /> : <FaBars size={27} />}
                </div>
            ) : (
                <nav>
                    <ul>
                        <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                        <li><Link activeClass="active" to="services" spy={true} smooth={true}>Products</Link></li>
                        {/*<li><Link activeClass="active" to="warehouse" spy={true} smooth={true}>Warehouse</Link></li>*/}
                        {/*<li><Link activeClass="active" to="transportations" spy={true} smooth={true}>Transportations</Link></li>*/}
                        <li><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></li>
                        <li><Link activeClass="active" to="contact" spy={true} smooth={true}>Contacts</Link></li>
                    </ul>
                </nav>
            )}
            {width < 500 && menu && ( // if the menu state is true, show the menu options in absolute position
                <div className="menu-options">
                    <div className="option">
                        <Link activeClass="active" to="home" spy={true} smooth={true} onClick={handleMenu}>Home</Link>
                    </div>
                    <div className="option">
                        <Link activeClass="active" to="services" spy={true} smooth={true} onClick={handleMenu}>Products</Link>
                    </div>
                    <div className="option">
                        <Link activeClass="active" to="about" spy={true} smooth={true} onClick={handleMenu}>About</Link>
                    </div>
                    <div className="option">
                        <Link activeClass="active" to="contact" spy={true} smooth={true} onClick={handleMenu}>Contacts</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;