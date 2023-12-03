import React from 'react';
import './Order.css';
import { Link } from 'react-router-dom';
const Order = () => {
    return (
        <div className='adjust4'>
           <div class="card text-center card-order">
  <div className="card-header text-danger fs-5 fw-bold">Anizon</div>
  <div className="card-body">
    <h5 className="card-title">Order Placed</h5>
    <img  className='order-img' src='/shopping.png' alt='order-img'/>
    <p className="card-text text-success fw-bold fs-2">Successfully</p>
    <Link to="/Home" className="btn btn-warning order-btn" data-mdb-ripple-init>Shop More</Link>
  </div>
  
</div>
        </div>
    );
}

export default Order;
