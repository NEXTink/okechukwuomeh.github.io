import React from 'react';
import img1 from '../img/img1.jpg'
const ReviewCard = ({img, name,role,Description}) => {
    return (
        <div className='reviewBox'>
            <img alt='img' className='reviewImg' src={require(`../img/${img}.jpg`)}/>
            <p className='reviewN'>{name}</p>
            <p className='reviewR'>{role}</p>
            <p className='reviewD'>{Description}</p>
        </div>
    );
};

export default ReviewCard;