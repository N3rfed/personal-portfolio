import React from 'react';
import './projects.css';
import githubLogo from '../../assets/github.png';

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-container">
                <h2 className="projectHeader">Projects<span className="dash"> </span></h2>
                
                <div className="card-wrapper">    
                    {/* Project 1 */}
                    <div className="card">
                        <div className="box">                        
                            <a href="https://github.com/lynettehemingway/wolfbot" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="github" className="githubLogo" />
                            </a>
                        </div>
                        <h2 className="projectPara">UFFSA Discord Bot</h2>
                        <p className="projectDesc">Discord bot for the UFFSA Discord server using Google Calendar API to notify members about events and play music.</p>
                    </div>

                    {/* Project 2 */}
                    <div className="card">
                        <div className="box">                        
                            <a href="https://github.com/N3rfed/Sudoku_Group_89" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="github" className="githubLogo" />
                            </a>
                        </div>
                        <h2 className="projectPara">Sudoku</h2>
                        <p className="projectDesc">A typical Sudoku game that generates a 9x9 grid with randomly filled cells, featuring difficulty settings and win/loss states.</p>
                    </div>

                    {/* Project 3 */}
                    <div className="card">
                        <div className="box">                        
                            <a href="https://github.com/N3rfed/personal-portfolio" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="github" className="githubLogo" />
                            </a>
                        </div>
                        <h2 className="projectPara">Portfolio Website</h2>
                        <p className="projectDesc">Uses React JS, HTML, and CSS to create a website showcasing my background, personal projects, and skills.</p>
                    </div>

                    {/* Project 4 */}
                    <div className="card">
                        <div className="box">                        
                            <a href="https://github.com/N3rfed/minesweeper2024" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="github" className="githubLogo" />
                            </a>
                        </div>
                        <h2 className="projectPara">Minesweeper</h2>
                        <p className="projectDesc">A classic Minesweeper implementation with bomb detection logic and grid traversing algorithms.</p>
                    </div>

                    {/* Project 5 */}
                    <div className="card">
                        <div className="box">                        
                            <a href="https://github.com/via-zhang/BlazeNav" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="github" className="githubLogo" />
                            </a>
                        </div>
                        <h2 className="projectPara">BlazeNav</h2>
                        <p className="projectDesc">Comparing Bellman-Ford and Dijkstra's Algorithms to find the shortest path between the Gainesville Fire Station #1 and a user-inputted fire location.</p>
                    </div>

                    {/* Project 6 */}
                    <div className="card">
                        <div className="box">                        
                            <a href="https://github.com/N3rfed/jumpscareapp" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="github" className="githubLogo" />
                            </a>
                        </div>
                        <h2 className="projectPara">ShriekPeek</h2>
                        <p className="projectDesc">Android app that notifies users 10 seconds in advance of upcoming horror movie jumpscares.</p>
                    </div>

                    {/* Project 7 */}
                    <div className="card">
                        <div className="box">                        
                            <a href="https://github.com/anduytran/tracklisttranslator" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="github" className="githubLogo" />
                            </a>
                        </div>
                        <h2 className="projectPara">Playlistify</h2>
                        <p className="projectDesc">Web application that deciphers a Spotify playlist's themes and meanings with AI interpretations.</p>
                    </div>

                    {/* Project 8 */}
                    <div className="card">
                        <div className="box">                        
                            <a href="https://github.com/henryharborne/NuMe" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="github" className="githubLogo" />
                            </a>
                        </div>
                        <h2 className="projectPara">NuMe</h2>
                        <p className="projectDesc">AI-powered health and wellness tracking application focused on daily habits and mental clarity.</p>
                    </div>
                     {/* Project 9 */}
                     <div className="card">
                        <div className="box">                        
                            <a href="https://github.com/anthonyle1/scootagator" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="github" className="githubLogo" />
                            </a>
                        </div>
                        <h2 className="projectPara">ScootAGator</h2>
                        <p className="projectDesc">Scooter app made for University of Florida students that integrates weather radars and live polling service to determine parking availability.</p>
                    </div>
                     {/* Project 10 */}
                     <div className="card">
                        <div className="box">                        
                            <a href="https://github.com/ernestol7/CIS4930-Final-Project" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="github" className="githubLogo" />
                            </a>
                        </div>
                        <h2 className="projectPara">Credit Card Fraud Detector </h2>
                        <p className="projectDesc">Compared 5 different machine learning models to find the best predictor for a large data set of legitimate and fraudulent credit card transactions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects;