
import React, { useContext, useState } from 'react';
import PreHome from './PreHome';
import Contact from './Contact';
import Cart from './Cart';
import noteContext from '../Context/notes/noteContext';
import Nav from './Nav';
import Home from './Home';
import {BrowserRouter as Router, Link , Navigate, Routes ,Route } from 'react-router-dom';
import ProductImage from './ProductImage';
import Order from './Order';
const Container = () => {
  const context = useContext(noteContext)
  
    return (
      
        <Router>
         <Nav/>
        <Routes>
        <Route exact path='/' element={ context.status===true ? ( <Navigate to='/Home'/>) :(<PreHome/>)  }/>
         <Route exact path='/Home' element={context.status===true ? <Home/> : <PreHome/>}/>
         <Route exact path='/Contact' element={<Contact/>}/>
         <Route exact path='/ProductImage' element={<ProductImage/>}/>
         <Route exact path='/Cart' element={<Cart/>}/>
         <Route exact path='/Order' element={<Order/>}/>
        </Routes>
        </Router>
     
    );
}

export default Container;