import React from 'react';
import './intro.css';
import bg from '../../assets/jaden.jpg';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <p className="about">/ About Me<span className="dash"> </span></p>
                <span className="hello">Hi! My name is</span>
                <span className="myName">Jaden.</span>
                <p className="introPara">I am a third year university student majoring in Computer Science. I am
                    specifically interested in learning more about Game Development and AI.
                    
                    Other than programming, I love editing videos for YouTube, playing video games, 
                    watching anime, working out, and hanging out with friends. 
                     </p>
            </div>
            <div className="img">
                <img src={bg} alt="jaden" className="img" />
            </div>
        </section>
    )
}
export default Intro;