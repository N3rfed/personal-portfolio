import React from 'react';
import './projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <div className="projectContent">
                <p className="projectHeader">/ Projects<span className="dash"> </span></p>
                <span className="projectPara">UFFSA Discord WolfBot</span>
                <p className="projectDesc">Discord bot for the UFFSA Discord server</p>
                <span className="projectPara">Sudoku</span>
                <p className="projectDesc">Sudoku game</p>
                <span className="projectPara">Personal Portfolio Website</span>
                <p className="projectDesc">The website you're on</p>
            </div>
        </section>
    )
}
export default Projects;