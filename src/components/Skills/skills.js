import React from 'react';
import './skills.css';
import Cplusplus from '../../assets/CLogo.png';
import CSS from '../../assets/CSSLogo.png';
import HTML from '../../assets/HTMLLogo.png';
import Java from '../../assets/javaLogo.png';
import MATLAB from '../../assets/MATLABLogo.png';
import Python from '../../assets/python.png';
import ReactLogo from '../../assets/reactLogo.png'
import nodeJSLogo from '../../assets/nodejsLogo.png'
import nextJSLogo from '../../assets/nextjsLogo.png'
import tensorFlowLogo from '../../assets/tensorFlowLogo.png'
import sklearnLogo from '../../assets/sklearnLogo.png'
import pandasLogo from '../../assets/pandasLogo.png'
import numpyLogo from '../../assets/numpyLogo.png'
import matplotlibLogo from '../../assets/matplotlibLogo.png'
import seabornLogo from '../../assets/seabornLogo.png'
import gitLogo from '../../assets/gitLogo.png'
import photoshopLogo from '../../assets/photoshopLogo.png'
import vegasproLogo from '../../assets/vegasproLogo.png'
import vscodeLogo from '../../assets/vscodeLogo.png'
import figmaLogo from '../../assets/figmaLogo.png'



const Skills = () => {
    // 1. Data for Top Row
    const tools = [
        { name: "Java", img: Java },
        { name: "React", img: ReactLogo },
        { name: "Python", img: Python },
        { name: "C++", img: Cplusplus },
        { name: "MATLAB", img: MATLAB },
        { name: "HTML", img: HTML },
        { name: "CSS", img: CSS },
        { name: "Node.js", img: nodeJSLogo },
        { name: "Next.js", img: nextJSLogo },
        { name: "TensorFlow", img: tensorFlowLogo },
        { name: "scikit-learn", img: sklearnLogo },
        { name: "Pandas", img: pandasLogo },
        { name: "NumPy", img: numpyLogo },
        { name: "Matplotlib", img: matplotlibLogo },
        { name: "seaborn", img: seabornLogo },
    ];

    // 2. Data for Bottom Row
    const environments = [
        { name: "Git", img: gitLogo },
        { name: "VS Code", img: vscodeLogo },
        { name: "VEGAS Pro", img: vegasproLogo },
        { name: "Figma", img: figmaLogo },
        { name: "Photoshop", img: photoshopLogo },

    ];

    return (
        <section id="skills">
            <div className="skills-container">
                <h2 className="skillsHeader">Skills<span className="dash"> </span></h2>
                
                <div className="skill-category">
                    <h3>Development Tools</h3>
                    <div className="marquee">
                        <div className="marquee-track scroll-left">
                            {[...tools, ...tools].map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <img src={skill.img} alt={skill.name} />
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Environments</h3>
                    <div className="marquee">
                        <div className="marquee-track scroll-right">
                            {[...environments, ...environments, ...environments, ...environments].map((skill, index) => (
                                <div className="skill-item" key={index}>
                                    <img src={skill.img} alt={skill.name} />
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;