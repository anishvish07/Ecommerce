import React, { useContext } from 'react';
import noteContext from '../Context/notes/noteContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const context = useContext(noteContext);

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
          </div>
        </div>
      ))}
          
      </div>
      <button className='btn btn-warning buy-btn'>Order Now</button>
    </div>
  );
};

export default Cart;
