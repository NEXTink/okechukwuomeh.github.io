import React,{Component} from 'react';
import ReviewCard from "./reviewCard";
import img from '../img/img1.jpg'
class Review extends Component{
    state = {
        gallery: [
            {
                img: 'img1',
                name: 'omeh okechukwu',
                description: 'lorem jnfjn  dfjbjnf fsjlnljf jfknlkfs jdnlj',
                role: 'Ceo Ting inc'
            },
            {
                img: 'img2',
                name: 'Phil jones',
                description: 'lorem jnfjn  dfjbjnf fsjlnljf jfknlkfs jdnlj',
                role: 'Ceo Ting inc'
            },
            {
                img: 'img3',
                name: 'Ace jake',
                description: 'lorem jnfjn  dfjbjnf fsjlnljf jfknlkfs jdnlj',
                role: 'Ceo vibe inc'
            },

        ]
    }
 render() {
     return (
         <div className='review pd-v4'>
             <h2 className='center hr-center'>
                 <hr/>
                 <p>Positive Reviews</p>
             </h2>
            <div className='review-flex'>
                {
                    this.state.gallery.map((e,i)=>{
                        return  <ReviewCard key={i} img={e.img} role={e.role} name={e.name} Description={e.description}/>
                    })
                }
            </div>
         </div>
     );
 }
};

export default Review;