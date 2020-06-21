import React, {Component} from 'react';
import Navigation from "../components/navigation";
import '../sass/components/contact.scss'
import OkeCanvas from "../components/OkeCanvas";
class Contact extends Component {
    render() {
        return (
            <div>
                <Navigation/>

               <div className="contact">

                   <form className='contactForm'>
                       <h2 className='contactForm-H'>Contact Me</h2>
                       <div className='input-box'>
                           <input className='input' placeholder='email'/>
                       </div>
                       <div className='input-box'>
                           <textarea className='textarea' placeholder='message' />
                       </div>
                       <button className='hireBtn'>Contact ME!</button>
                   </form>
                 <OkeCanvas/>
               </div>
            </div>
        );
    }
}

export default Contact;