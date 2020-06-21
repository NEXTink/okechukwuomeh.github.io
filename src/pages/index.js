import React from 'react';
import Navigation from "../components/navigation";
import Hero from "../components/Hero";
import Purpose from "../components/purpose";
// import Review from "../components/Review";
import Skills from "../components/Skills";
import HomeProjects from "../components/homeProjects";
import Footer from "../components/footer";
import HomeAbout from "../components/homeabout";
// import Carousel from "../components/Carousel";
// import OkeCanvas from "../components/OkeCanvas";

const Home = ({color}) => {
    return (
        <div >
            <Navigation/>
            <div className="layout">
                <Hero color={color}/>
                <Purpose/>
                <Skills/>
                <HomeAbout/>
                <HomeProjects/>


                {/*<Review/>*/}
                <Footer/>
            </div>
        </div>
    );
};

export default Home ;