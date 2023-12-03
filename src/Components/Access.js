import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import 'animate.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import { FaArrowLeft } from "react-icons/fa6";
import noteContext from '../Context/notes/noteContext';

const Access = () => {
  const context = useContext(noteContext);
  const navigate = useNavigate();

  
  const electronics = context.result.result.filter(
    (resul) => resul.category === "electronics"
  );

  return (
    <div style={{ marginTop: '70px' }}>
    <Link to="/Home"><button className='btn btn-warning fs-5 fw-bold m-3'>< FaArrowLeft/> Go Back</button></Link>
      <div className='adjust-mid '>
        {Array.isArray(electronics) &&
          electronics.map((resul, index) => (
            <div className='card cards animate__animated animate__zoomIn' key={index}>
              <img className='image-size' src={`${resul.image}`} alt={`Product ${index}`} />
              <div className='card-details'>
                <div className='arrow'>
                  <h4 className='grid-items card-text card-texts'>
                    {resul.title ? <h5 className='text'>{resul.title.slice(0, 30) + '...'}</h5> : ' '}
                  </h4>
                  <button
                    onClick={(e) => {
                      context.texthandler(e, index);
                      context.setIdx(resul.index);
                      context.setTitle(resul.title);
                      context.setDesc(resul.description);
                      context.setRating(resul.rating);
                      context.setPrice(resul.price);
                      context.setImage(resul.image);
                      navigate('/ProductImage');
                    }}
                    className='arrow-size'
                  >
                    <FaArrowRight />
                  </button>
                </div>
                <button className='btns2 '>
                  <p className='grid-items2 btns' style={{ height: '20px' }}>
                    {resul.price ? <h5 className='text-danger'>${resul.price}</h5> : ''}
                  </p>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default  Access;
