import React from 'react'
import './navbar.css'
import logo from "../../assets/menuIcon.png"
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <ScrollLink className="desktopMenuListItem" to="home" smooth={true} duration={500}>Home</ScrollLink>
                <ScrollLink className="desktopMenuListItem" to="intro" smooth={true} duration={500}>About</ScrollLink>
                <ScrollLink className="desktopMenuListItem" to="projects" smooth={true} duration={500}>Projects</ScrollLink>
                <ScrollLink className="desktopMenuListItem" to="skills" smooth={true} duration={500}>Skills</ScrollLink>
            </div>
            <button className='desktopMenuBtn'>
                <img src="" alt="" className="img.desktopMenuImg" />Contact Me!</button>
        </nav>
    )
}
export default Navbar