import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandHolding, faCode, faClock} from '@fortawesome/free-solid-svg-icons'
const Purpose = () => {
    return (
        <div className='purpose'>
            <h2>
                <hr/>
                <p> What I bring to the table</p>
            </h2>
            <div className='rounded-box'>
                 <div className='round-item left'>
                     <div className='roundBox-rot'>
                         <FontAwesomeIcon className='purpose-icon c1' icon={faHandHolding}/>
                     </div>
                     <p className='p-card'>Team Player</p>
                     <p> reprehenderit, sint? Consectetur corporis dolor dolore eos, esse facere hic, id in natus, porro rem soluta vero vitae. Quasi, quod, recusandae.</p>
                     <hr className='bc1'/>
                 </div>
                <div className='round-item center'>
                    <div className='roundBox-rot '>
                        <FontAwesomeIcon className='purpose-icon c2' icon={faCode}/>
                    </div>
                    <p className='p-card'>Skilled and efficient</p>
                    <p> reprehenderit, sint? Consectetur corporis dolor dolore eos, esse facere hic, id in natus, porro rem soluta vero vitae. Quasi, quod, recusandae.</p>
                    <hr className='bc2'/>
                </div>
                <div className='round-item right'>
                    <div className='roundBox-rot'>
                        <FontAwesomeIcon className='purpose-icon c3' icon={faClock}/>
                    </div>
                    <p className='p-card'>Speed</p>
                    <p> reprehenderit, sint? Consectetur corporis dolor dolore eos, esse facere hic, id in natus, porro rem soluta vero vitae. Quasi, quod, recusandae.</p>
                    <hr className='bc3 tr-right'/>
                </div>
            </div>
        </div>
    );
};

export default Purpose;