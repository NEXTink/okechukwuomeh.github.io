import React, {useState} from 'react';
import '../App.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon,faSun} from "@fortawesome/free-solid-svg-icons";

export const Theme = (props)=> {
    const [theme,setTheme] = useState(false);
    const [color,setColor] = useState('#f5f5f5');
        return(
            <div  className={theme?'lightTheme':'darkTheme'} color={[color,setColor]} >
                <button className='themeBtn'
                        onClick={()=>{theme===true?setTheme(false):setTheme(true);
                            color ==='#f5f5f5'?setColor('#050505'):setColor('#f5f5f5');
                        }}>{theme? <FontAwesomeIcon className='themeBtn-icon' icon={faMoon}/>: <FontAwesomeIcon className='themeBtn-icon' icon={faSun}/>}</button>

                   {
                       props.children
                   }

            </div>
        )};
