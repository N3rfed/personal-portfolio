import React from 'react';
import './home.css';
import gif from '../../assets/homegif.gif';
import ParticlesBackground from './ParticleBackground';
const Home = () => {
    return (
        <section id="home">
            <ParticlesBackground />
            <div className="container">
                
                {/* Left Side: Text */}
                <div className="home-text-section">
                    <p className="homeHeader">WELCOME<span className="dash"> </span></p>
                    <p className="homePara">To my Personal Portfolio website.</p>
                </div>

                {/* Right Side: GIF */}
                <div className="home-visual-section">
                    <img src={gif} alt="Abstract geometric shape" className="home-gif"/>
                </div>
                
            </div>
        </section>
    );
}

export default Home;