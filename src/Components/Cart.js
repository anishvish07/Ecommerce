import React, { useContext } from 'react';
import noteContext from '../Context/notes/noteContext';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const context = useContext(noteContext);
  const navigate = useNavigate();


    const removeCard = (index) => {
    context.removeCardFromCart(index);
  };
  const clearCart = () => {
    context.clearCart();
  };


  if(context.cart.length === 0){
          return(
            <div class="card text-center card-empty">
  <div class="card-header text-danger fw-bold fs-4">Anizon- Cart Page</div>
  <div class="card-body">
    <h5 class="card-title text-dark fs-2 fw-bold">Add Product To Cart</h5>
    <p class="card-text text-primary fs-5 description-emptybox mt-5">Explore Our Shopping Website!!.</p>
    <Link to="/Home" class="btn btn-primary mt-4" data-mdb-ripple-init>Go Back</Link>
  </div>
 
</div>
          )
  }
  return (
    <div className=''style={{marginTop:'90px',}}>
    <div className='adjusts row'>
      {context.cart.map((item, index) => (
        <div key={index} className="card cart-card col-lg-3" style={{ width: "18rem", marginTop: '20px', marginLeft: '20px'  }}>
          <img className="card-img-top cart-img" src={item.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <Link to="/Order" className="btn btn-primary">
              Buy Now
            </Link>
            <span className='qty'>{item.quantity}</span>
              <button className="btn btn-danger cls-btn btn-close " onClick={() => removeCard(index)}></button>
          </div>
        </div>
      ))}
          
      </div>
      <div className='row'>
      <button className='btn btn-warning buy-btn col-lg-3' onClick={()=> navigate('/Order')}>Order Now</button>
       <button className='btn btn-danger cart-clear col-lg-3 ' onClick={clearCart}>
        Clear Cart
      </button>
      </div>
    </div>
  );
};

export default Cart;
