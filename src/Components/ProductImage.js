import React, { useContext } from 'react';
import './ProductImage.css';
import noteContext from '../Context/notes/noteContext';
import { FaTags } from "react-icons/fa";
import 'animate.css';
import Cart from './Cart';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductImage = () => {
    const context = useContext(noteContext);
    const navigate= useNavigate();
    
    return (
        <div classNameName='adjust2'>
<div className="card mb-3 card-size" >
  <div className="row g-0">
    <div className="col-md-4">
    
      <img style={{height:'70%', marginLeft :'20px', marginTop:'20px',width:'300px' }}
        src={context.image}
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start "
      /><button className='cart-btn btn-warning btn ' onClick={()=>{
        navigate('/Cart');
        context.addProductToCart({ title: context.title, image: context.image, quantity: context.qty });
        context.cartHandler();
       
      }}>Add Cart</button>
      <h4 className='rate'>Rating : ✨{context.rating.rate}</h4>
    </div>
    <div className="col-md-8">
      <div className="card-body">
       
        <h5 className="card-title animate__animated animate__pulse" style={{ fontFamily:'serif' ,marginLeft:'15px', fontSize:'35px', marginBottom:'30px'}}><FaTags /> {context.title}</h5>
        <p style={{fontSize:'40px' , fontFamily:'sans-serif' ,marginLeft:"10px",color:'brown' ,paddingLeft:'20px'}}>Description:-</p>
        <p className="card-text des-style" style={{fontFamily:"monospace" , marginLeft:'15px',border:'3px solid orange' , borderRadius:'15px' ,textAlign: 'end'}}>
                 {context.desc.slice(0,170)}
        </p>
         <p className="card-text text-danger">
          <strong className="text-bold fs-2 price-style" >💲{context.price}</strong>
        </p>
     <div className='row'>
  <button className='col-lg-6 btn btn-danger fw-bold' onClick={() => context.cartHandler()}>+</button>
  <p className='text-warning fs-5 fw-bold'>Quantity : {context.qty}</p>
  <button className='col-lg-6 btn-danger btn fw-bold' onClick={() => context.cartHandler2()}>-</button>
</div>

        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
    );
}

export default ProductImage;
