import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub,faDribbble,faFacebook,faBitbucket,faLinkedinIn,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <h3>Socials</h3>
            <div className='footer-icons'>
                <FontAwesomeIcon className='footer-icon col-1' icon={faBitbucket}/>
                <FontAwesomeIcon className='footer-icon col-9' icon={faFacebook}/>
                <FontAwesomeIcon className='footer-icon' icon={faGithub}/>
                <FontAwesomeIcon className='footer-icon col-2' icon={faInstagram}/>
                <FontAwesomeIcon className='footer-icon col-9' icon={faLinkedinIn}/>
                <FontAwesomeIcon className='footer-icon col-5' icon={faTwitter}/>
                <FontAwesomeIcon className='footer-icon col-4' icon={faDribbble}/>
            </div>
            <div className='comp'> <span>contact okechukwuomeh3@gmail.com</span></div>
        </footer>
    );
};

export default Footer;