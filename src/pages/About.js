import React from 'react';
import Navigation from "../components/navigation";
import Carousel from "../components/Carousel";

const About = () => {
    return (
        <div className='about'>
            <Navigation/>
            <div className='aboutPage' >
                <h2 className='designH'>
                <span className='text-center'>I love design</span>
                    {/*<hr className='mg-T1'/>*/}
                </h2>
                <div className='aboutPage-dets'>
                  {/*<h1>  I am Nigerian*/}
                  {/*    <span>we are very creative </span>*/}
                  {/*</h1>*/}

                 <div className='aboutContext'>
                     <img className='aboutImg' src={require('../img/me.jpg')} alt='omeh okechukwu'/>
                     <div className='aboutText'>
                         <span>A little about Myself</span>
                          <p>i am an enthusiastic innovator, a lover of design and creativity. I am a strong believer in improving technology. i have worked for over 3 years in tech, on personal projects, for a few companies, and I have helped some of my fiends out. </p>
                         <p>I am currently undergoing an undergraduate program in Mechanical Engineering from the University of Nigeria. I am almost done.</p>
                         <p>I am self taught, but i have learned a lot from people, my friends and colleagues </p>
                          <p>I am Javascript lover and professional</p>
                         <p className='aboutSkill'>get to know me in few lines</p>
                         <ul className='aboutList'>

                             <li className='aboutList-item'>
                                 Very creative and Skilled
                             </li>
                             <li className='aboutList-item'>
                                 Javascript lover
                             </li>
                             <li className='aboutList-item'>
                                 very friendly and love collaboration, basically am a people person
                             </li>
                             <li className='aboutList-item'>
                                 very technical and innovative
                             </li>
                             <li className='aboutList-item'>Am the right person for the Job</li>

                         </ul>
                     </div>

                 </div>
                    {/*<div>*/}
                    {/*    <form>*/}
                    {/*        <button className="hireBtn">Hire ME</button>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                   {/*<div className='aboutSkills'>*/}
                   {/*    <h2>My Skills</h2>*/}
                   {/*    <Carousel/>*/}
                   {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default About;