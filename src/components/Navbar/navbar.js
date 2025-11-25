import React from 'react'
import './navbar.css'
import logo from "../../assets/menuIcon.png"
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbarContainer">
                <img src={logo} alt="Logo" className="logo"/>
                
                <div className="desktopMenu">
                    <ScrollLink className="desktopMenuListItem" to="home" smooth={true} duration={500} offset={-75}>Home</ScrollLink>
                    <ScrollLink className="desktopMenuListItem" to="intro" smooth={true} duration={500} offset={-75}>About</ScrollLink>
                    <ScrollLink className="desktopMenuListItem" to="projects" smooth={true} duration={500} offset={-75}>Projects</ScrollLink>
                    <ScrollLink className="desktopMenuListItem" to="skills" smooth={true} duration={500} offset={-75}>Skills</ScrollLink>
                </div>
                
                <ScrollLink to="contact" smooth={true} duration={500} offset={-75}>
                    <button className='desktopMenuBtn'>
                        <img src="" alt="" className="desktopMenuImg" />Contact Me!
                    </button>
                </ScrollLink>

            </div>
        </nav>
    )
}
export default Navbar