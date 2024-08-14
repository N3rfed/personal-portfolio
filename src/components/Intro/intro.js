import React from 'react';
import './intro.css';
import bg from '../../assets/jaden.jpg';
import introbg from '../../assets/homebg.png'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <p className="about">/ About Me<span className="dash"> </span></p>
                <span className="hello">Hey! My name is</span>
                <span className="name">Jaden.</span>
                <p className="introPara">I am a third year in Computer Science with additional experience 
                    in creating graphics and other visuals!</p>
            <div className="bg-img">
                <img src={introbg} alt="background" className="bg-img"/>
            </div>
            </div>
            <div className="img">
                <img src={bg} alt="jaden" className="img" />
            </div>

        </section>
    )
}
export default Intro;