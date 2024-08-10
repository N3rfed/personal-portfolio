import React from 'react';
import './intro.css';
import bg from '../../assets/jaden.jpg';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="about">/ About Me!<span className="dash"> </span></span>
                <p className="introPara">I am a third year in Computer Science with additional experience in creating graphics and other visuals!</p>
            </div>
            <div className="img">
                <img src={bg} alt="jaden" className="img" />
            </div>
        </section>
    )
}
export default Intro;