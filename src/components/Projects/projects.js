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
                        <h2 className="projectPara">UFFSA Discord Bot</h2>
                        <p className="projectDesc">Discord bot for the UFFSA Discord server. The bot uses the Google
                    Calendar API to notify server members about events that are the day of and throughout the week. 
                    In addition, the bot is able to join voice channels to play music.</p>
                    </div>
                    <div className="card">
                        <div className="box">                        
                        <a href="https://github.com/N3rfed/Sudoku_Group_89" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="github" className="githubLogo" />
                        </a>
                        </div>
                        <h2 className="projectPara">Sudoku</h2>
                        <p className="projectDesc">A typical Sudoku game that generates a 9x9 grid with randomly filled 
                    cells in 3x3 subgrids. The game has a simple user interface that allows the player to reset the
                    board, choose a difficulty, and exit the program. In addition, the game also has a win and loss
                    screen depending on if the player correctly or incorrectly fills in each empty cell.</p>
                    </div>
                    <div className="card">
                        <div className="box">                        
                        <a href="https://github.com/N3rfed/personal-portfolio" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="github" className="githubLogo" />
                        </a>
                        </div>
                        <h2 className="projectPara">Personal Portfolio Website</h2>
                        <p className="projectDesc">Uses React JS, HTML, and CSS to create a website showcasing
                        my background, personal projects, and skills.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;