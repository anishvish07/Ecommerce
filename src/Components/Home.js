import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import 'animate.css'
import{Link,useNavigate} from 'react-router-dom';
import noteContext from '../Context/notes/noteContext';
import { TbShoppingBagSearch } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import ProductImage from './ProductImage';
import Men from './Products/Men'
const Home = () => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  useEffect(() => {
    context.fetch();
  }, []);



  return (
    <div>
      <div className='container-fluid back-picture '>
        <div className={`adjust sticky-search`}>
        <div className='search-container'>
         <span className='logo animate__animated animate__tada'><TbShoppingBagSearch size={40} /></span> <input required="" type="text" name="text" className="input" placeholder='Search' />
          
</div>
<br/>
<div>
<div className=' all-btn'>
<button className=' btn-size'>All</button>
<button className=' btn-size' onClick={()=>{navigate('/Men')}}>Men</button>
<button className='btn-size'>Women</button>
<button className='btn-size'>Accessories</button>
</div>
</div>
<br/>
          <div className='adjust-mid '>
            {Array.isArray(context.result.result) && context.result.result.map((resul, index) => (
              
              <div className='card  cards animate__animated animate__zoomIn' key={index}>
              
                <img className='image-size' src={`${resul.image}`} alt={`Product ${index}`} />
                <div className='card-details'>
                
                <div className='arrow'>
                  <h4 className='grid-items card-text card-texts'>
                    {resul.title ? <h5 className='text'>{resul.title.slice(0, 30) + '...'  } </h5> : " "}
                  </h4>
                  
                 
                <button onClick={(e ,index) => {
                
  context.texthandler(e ,index);
  context.setIdx(resul.index);
  context.setTitle(resul.title);
  context.setDesc(resul.description);
  context.setRating(resul.rating);
  context.setPrice(resul.price);
  context.setImage(resul.image);
  navigate('/ProductImage');
  
}} className='arrow-size'><FaArrowRight /></button> 
                  </div>
                  <button className='btns2 '><p className='grid-items2 btns' style={{height : '20px'}}>
                    {resul.price ? <h5 className='text-danger'>${resul.price}</h5> : ""}
                  </p></button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
