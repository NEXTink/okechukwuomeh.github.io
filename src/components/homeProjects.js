import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faDownload} from "@fortawesome/free-solid-svg-icons";

const HomeProjects = () => {
    return (
        <div className='project-section skills'>
            <div className='head-h'>

                <h2>
                    <hr/>
                    <span>Some of my projects</span>
                </h2>

            </div>
            <div className='project-box'>


                <div className='project-lay'>

                      <div className='img-box'>
                          <img src={require('../img/astrialawTest_home.png')}/>
                      </div>
                      <div className='text-box'>
                          <h4>Astria Law</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eos ex inventore labore recusandae? Ab aliquid architecto deserunt distinctio eaque ipsum maiores modi molestiae nisi, odit quidem repudiandae similique, veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                          <p>
                              Aut commodi culpa distinctio earum error, est et expedita iusto natus odio pariatur provident quaerat repellendus temporibus vitae! At earum in voluptatum?
                          </p>
                  </div>
                 </div>
                <div className='project-lay'>
                    <div className='text-box'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci amet architecto atque blanditiis, distinctio earum est facere hic nesciunt non pariatur quasi qui, quisquam rem, repudiandae vel voluptatibus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic obcaecati, quam? Architecto aut consequatur eligendi esse maiores modi molestias officia quisquam voluptatem! Eligendi et facere, minus nulla reprehenderit saepe ullam.</p>
                        <a className='project_live-link' target='_blank'  href='https://astrialaws.com'>astrialaws.com</a>
                    </div>
                    <div className='img-box'>
                        <img src={require('../img/Register.png')}/>
                        <img src={require('../img/login.png')}/>
                    </div>
                </div>
                <div className='disp-btn'>
                    <span className='moreProjectBtn'>
                        more Projects
                    </span>
                    <span className='moreProjectBtnBl'>
                       download my cv <FontAwesomeIcon icon={faDownload}/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HomeProjects;