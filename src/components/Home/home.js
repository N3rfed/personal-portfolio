import React from 'react';
import './home.css';
import gif from '../../assets/homegif.gif'

const Home = () => {
    return (
        <section id="home">
            <div className="homeContent">
            <div className="home-gif"><img src={gif} alt="gif" className="home-gif"/></div>
                <div className="bg-img"></div>
                <p className="homeHeader">WELCOME<span className="dash"> </span></p>
                <p className="homePara">To my Personal Portfolio website.</p>
            </div>
        </section>
    )
}
export default Home;