import React from 'react';
import './intro.css';
import bg from '../../assets/jaden.jpg';
import resumePDF from '../../assets/resume.pdf'


const Intro = () => {
    return (
        <section id="intro">
            <div className="container">
                
                {/* Left Side: Text */}
                <div className="intro-text-section">
                    <p className="about">About Me<span className="dash"> </span></p>
                    
                    <div className="name-wrapper">
                        <span className="hello">Hi! My name is</span>
                        <span className="myName"> Jaden.</span>
                    </div>
                    
                    <p className="introPara">
                        I am a third year university student majoring in Computer Science. I am specifically interested in learning more about Game Development and AI. 
                        <br /><br />
                        Other than programming, I love editing videos for YouTube, playing video games, watching anime, working out, and hanging out with friends.
                    </p>
                    <div className="btn-group">
                        {/* Resume Download Button */}
                        <a href={resumePDF} download="Jaden_Delapaz_Resume.pdf">
                            <button className="btn btn-primary">Download Resume</button>
                        </a>

                        {/* LinkedIn Button */}
                        <a href="https://www.linkedin.com/in/jadendelapaz/" target="_blank" rel="noopener noreferrer">
                            <button className="btn btn-secondary">Visit LinkedIn</button>
                        </a>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="intro-visual-section">
                    <img src={bg} alt="Jaden" className="profile-img" />
                </div>
                
            </div>
        </section>
    )
}
export default Intro;