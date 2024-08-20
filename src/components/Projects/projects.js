import React from 'react';
import './projects.css';
import githubLogo from '../../assets/github.png';


const Projects = () => {
    return (
        <section id="projects">
            <div className="projectContent">
                <h2 className="projectHeader">/ Projects<span className="dash"> </span></h2>
                
                <div className="card-wrapper">
                    
                    <div className="card">
                        <div className="box">                        
                        <a href="https://github.com/lynettehemingway/wolfbot" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="github" className="githubLogo" />
                        </a>
                    

                        </div>
                        <h2 className="name">UFFSA Discord Bot</h2>
                        <p className="description">Accurately flag all hidden mines to complete the game. The application allows for customizable dimensions, and includes a leaderboard to track and display the top completion times. 
                        <br></br><br></br><br></br>Skills: C++, SFML</p>
                    </div>
                <div className="github-logo"><img src={githubLogo} alt="github" className="github-logo" /></div>
                </div>
            </div>
        </section>
    )
}
export default Projects;