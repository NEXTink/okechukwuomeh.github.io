import React from 'react';

const HomeAbout = () => {
    return (
        <div className='home-about'>
            <div className='home-p'>
                <h2>
                    <hr/>
                    <p>A little about Me</p>
                </h2>
            </div>
            <div className='about-detail'>
                <div className='width-4'>
                    <p className='par'>i am an enthusiastic innovator, a lover of design and creativity. I am a strong believer in improving technology. i have worked for over 3 years in tech, on personal projects, for a few companies, and I have helped some of my fiends out. </p>
                <p className='par'>I am currently undergoing an undergraduate program in Mechanical Engineering from the University of Nigeria. I am almost done.</p>
                <p className='par'>I am self taught, but i have learned a lot from people, my friends and colleagues </p>
                <p className='par'>I am Javascript lover and professional</p>
                </div>
                <div  className='width-4'>
                <img src={require('../img/me.jpg')}/>
                <button className='hireBtn'>Hire me</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;