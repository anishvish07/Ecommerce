// noteContext.js
import React, { useEffect, useState } from "react";
import noteContext from "./noteContext";
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const NoteState = (props) => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();
  const [status, setStatus] = useState('');
  const [result, setResult] = useState('');
  const [text, setText] = useState('');
  const [index, setIndex] = useState('');
  const [Aouthenticated, setAouthenticated] = useState('');
  const [token, setToken] = useState(''); 
  const [prod , setProd] = useState('');
  const [idx ,setIdx] = useState('');
  const [title , setTitle] = useState('');
  const [price ,setPrice] = useState('');
  const [ rating ,setRating] = useState('');
  const [desc , setDesc] = useState('');
  const [image , setImage] = useState('');
  const [qty , setQty] = useState(1);
   const [cart, setCart] = useState([]);

      const productId = 1;
   let count =0;
   const product = (productId)=>{
         return result.find(product =>product.id === productId);
   }
   const showProductId = (productId) => {
    const products = product(productId);
    if (products) {
      console.log('Product Details ', products.title)
      setProd(products.title);
    } else {
      console.log('Product not found');
    }
  }
const addProductToCart = (product) => {
  const check = cart.findIndex((item) => item.title === product.title);

  if (check !== -1) {
    const updateCart = [...cart];
    updateCart[check].quantity += qty;
    setCart(updateCart);
  } else {
    setCart([...cart, { ...product, quantity: qty  }]);
  }
  setQty(0);
};

  const removeCardFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };
  const fetchData = async () => {
    try {
      const token = await getAccessTokenSilently();
      setToken(token);
      // Use the obtained token in your API calls
      // ...
    } catch (error) {
      console.error('Error obtaining access token:', error);
    }
  };
  const cartHandler = ()=>{
       
       setQty((prevQty)=>  prevQty + 1);
       console.log(qty);
          if(qty<0){
            return;
          }
  }
  const cartHandler2=()=>{
     
      
       if(qty<=0){
            return;
          }else{
            setQty((prevQty )=>prevQty-1);
      console.log(qty);
          }
    
  }

  useEffect(() => {
    if (!isAuthenticated) {
     
      setStatus(false);
    } else {
   
      setStatus(true);
    }
  }, [isAuthenticated]);

  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      // Perform authentication logic (e.g., API call to your authentication server)
      const authToken = token; // Replace with your actual authentication token

      // Store the token in local storage
      localStorage.setItem('authToken', authToken);

      // Update the authentication status in your state or context
      setAouthenticated(true);
      loginWithRedirect();

      // Redirect or perform any other actions after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const clearCart = ()=>{
    setCart([]);
  }

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('authToken');

    // Update the authentication status in your state or context
    setAouthenticated(false);
    setStatus(false);

    // Redirect or perform any other actions after logout
    logout({ returnTo: window.location.origin });
  };

  const texthandler = (e, index) => {
    // Assuming the input has a class name 'text'
    const textValue = e.target.closest('.arrow').querySelector('.text').innerText;
   
    setText(textValue);
    console.log('No.',idx);
  console.log('Title:', title);
console.log('Description:', desc);
console.log('Price:', price);
    console.log('Rating :', rating);
    console.log(textValue);
    console.log('Image:' ,image);
  };

  const fetch = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setResult({ result: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <noteContext.Provider value={{ status,  handleLogin, handleLogout,cartHandler,qty, cartHandler2,clearCart, addProductToCart,cart,removeCardFromCart ,setImage ,image ,result, fetch, text, texthandler ,desc, setDesc , rating, setRating , price ,  setPrice ,title, setTitle,idx,setIdx, showProductId,product}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
