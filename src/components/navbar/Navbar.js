import React, { useState } from 'react';
import { HiCode } from "react-icons/hi";
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyles.css';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    < HiCode className='icon' />
                    <h3>Syed Aitzaz Anwar</h3>
                </div>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Tech</li>
                    <li>Contacts</li>

                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>

        </div>


    )
}

export default Navbar