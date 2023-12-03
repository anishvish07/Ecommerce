import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Slideshow.css'


const SlideShow = ({images}) => {
    
    const [imageIndex ,setImageIndex] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setImageIndex((prevIndex) =>
                (prevIndex + 1) % images.length);

        },3000)
        return (()=>{
            clearInterval(intervalId);
        })

    },[imageIndex , images.length])
    return (
        <div className='Slideshow-container'>
            {images.map((image , index)=>(
                <div key={index} className={`slide ${index === imageIndex ? 'active' : ''}`}>
                <img className='imgs' src={image} alt={`Slide ${index +1}`}/>
                </div>
            ))}
        </div>
    );
}

export default SlideShow;
