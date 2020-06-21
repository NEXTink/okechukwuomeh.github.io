import React,{Component} from 'react';
import './test.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faCss3, faHtml5,faReact,faVuejs,faPython,faPhp,faNodeJs,faSass,faJs} from "@fortawesome/free-brands-svg-icons";

class Carousel extends Component{
    state = {
        items: [
            {item: faCss3,col:'col-1'}, {item: faHtml5, col:'col-2'},{item: faReact, col:'col-5'},{item: faVuejs, col:'col-6'},{item: faPython, col:'col-9'},{item: faPhp,col:'col-7'},{item: faNodeJs, col:'col-8'},{item: faSass, col:'col-4'},{item: faJs, col:'col-3'}
        ],
        showIndex: 0,
    };
    indexPlus(){
        let i = this.state.items;
        let index = this.state.showIndex;
        if (index === i.length-1){
            console.log(index);
            index = 0;
        }
            index +=1;
        this.setState(()=>{
            return {
                showIndex: index,
            }
        })
    }
    indexMinus(){
        let i = this.state.items;
        let index = this.state.showIndex;
        if (index === 0){
            console.log(index);
            index = i.length;
        }
            index -=1;

        this.setState(()=>{
            return {
                showIndex: index,
            }
        })
    }
    render() {
        return(
           <div className='carousel'>
               <div className='car'>
                   <button className='button left-50' onClick={()=>this.indexMinus()}><FontAwesomeIcon className='car-icon' icon={faAngleLeft}/></button>
                   {
                       this.state.items.map((e,i)=>{
                           return <div className={i===this.state.showIndex?'disBlock': 'carItem'} key={i}>
                               <div className='skill-box card icon-5'>
                                   <div className='round-icon-box'>
                                       <FontAwesomeIcon className={`round-icon ${e.col}`}icon={e.item}/>
                                   </div>
                               </div>
                           </div>
                       })
                   }

                   <button className='button right-50'  onClick={()=>this.indexPlus()}><FontAwesomeIcon className='car-icon' icon={faAngleRight}/></button>
               </div>

           </div>
        )
    }
}
export default Carousel;