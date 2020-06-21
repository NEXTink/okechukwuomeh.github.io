import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCss3, faHtml5,faReact,faVuejs,faPython,faPhp,faNodeJs,faSass,faJs} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    return (
        <div className='skills'>
            <div className='head-h'>

                <h2>
                    <hr/>
                    <span>My Skills</span>
                    <p>I am proficient in the following technologies</p>
                </h2>

            </div>
            <div className='skill-box'>

                <div className='round-icon-box'>
                    <FontAwesomeIcon className='round-icon col-2' icon={faHtml5}/>
                </div>
                <div className='round-icon-box'>
                    <FontAwesomeIcon className='round-icon col-3' icon={faJs}/>
                </div>
                <div className='round-icon-box'>
                    <FontAwesomeIcon className='round-icon col-4' icon={faSass}/>
                </div>
                <div className='round-icon-box'>
                    <FontAwesomeIcon className='round-icon col-5' icon={faReact}/>
                </div>
                <div className='round-icon-box'>
                    <FontAwesomeIcon className='round-icon col-6' icon={faVuejs}/>
                </div>
                <div className='round-icon-box'>
                    <FontAwesomeIcon className='round-icon col-7' icon={faPhp}/>
                </div>
                <div className='round-icon-box'>
                    <FontAwesomeIcon className='round-icon col-8' icon={faNodeJs}/>
                </div>
                <div className='round-icon-box'>
                    <FontAwesomeIcon className='round-icon col-9' icon={faPython}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;