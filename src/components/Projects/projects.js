import React from 'react';
import './projects.css';
import githubLogo from '../../assets/github.png';


const Projects = () => {
    return (
        <section id="projects">
            <div className="projectContent">
                <h2 className="projectHeader">/ Projects<span className="dash"> </span></h2>
                <span className="projectPara">UFFSA Discord WolfBot</span>
                <p className="projectDesc">Discord bot for the UFFSA Discord server. The bot uses the Google
                    Calendar API to notify server members about events that are the day of and throughout the week. 
                    In addition, the bot is able to join voice channels to play music.
                </p>
                <span className="projectPara">Sudoku</span>
                <p className="projectDesc">A typical Sudoku game that generates a 9x9 grid with randomly filled 
                    cells in 3x3 subgrids. The game has a simple user interface that allows the player to reset the
                    board, choose a difficulty, and exit the program. In addition, the game also has a win and loss
                    screen depending on if the player correctly or incorrectly fills in each empty cell.</p>
                <span className="projectPara">Personal Portfolio Website</span>
                <p className="projectDesc">Uses React JS, HTML, and CSS to create a website showcasing
                    my background, personal projects, and skills.</p>
                <div className="github-logo"><img src={githubLogo} alt="github" className="github-logo" /></div>

            </div>
        </section>
    )
}
export default Projects;