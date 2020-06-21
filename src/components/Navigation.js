import React, {Component} from 'react';
import '../sass/lightTheme/light_navigation.scss'
// import logo from '../img/logo.png';
import {Link} from 'react-router-dom'
class Navigation extends Component {
    render() {
        return (
            <nav className='navigation-box center-pos'>
                <Link className='logo Link' to='/'>omeh okechukwu</Link>
                <input  id='menu' type='checkbox'className='menu'/>
                <label className='bar' for='menu'><span className="menu-bars">&nbsp;</span></label>
                <ul className='navigation-list'>
                    <li className='navigation-item'><Link className='Link' to='/About'>About me</Link></li>
                    <li className='navigation-item'><Link className='Link' to='/Projects'>Projects</Link></li>
                    <li style={{display: 'inline-flex'}}>
                        <div className='auth-btn-box'>
                            <span className='auth-btn'><Link  className='Link-' to='/contact'>contact Me</Link></span>
                        </div>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Navigation;