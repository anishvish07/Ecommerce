import React, { useEffect, useState ,useContext } from 'react';
import './Nav.css';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import noteContext from '../Context/notes/noteContext';
import { MdAddShoppingCart } from "react-icons/md";
import 'animate.css';
const Nav = () => {
    
      const { user, isAuthenticated, isLoading } = useAuth0();
const { loginWithRedirect ,logout } = useAuth0();
const navigate = useNavigate();
  const[log , setLog] = useState('');
 const context = useContext(noteContext);
useEffect(()=>{
  if(isAuthenticated){
  setLog('Logout');
  
}else{
setLog(null)
}
},[]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
  <div className="container">
  <div >
   

       <img  className="animate__animated animate__tada" src="./shopping-cart2.png
    " height="40" alt=""
       />
       
{isAuthenticated && <img className="door"  src="./door.gif
    " height="40" alt=""
       />}
      </div>
   <Link to="/Home" style={{textDecoration: 'none'}} className='text-dark'><h4 className='brandName my-2' >Anizon</h4></Link>
<button className="navbar-toggler ps-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample01"
   aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon d-flex justify-content-start align-items-center">
     <i className="fas fa-bars"></i>
   </span>
</button>

    <div className="collapse navbar-collapse" id="navbarExample01">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {isAuthenticated && (
      <li className='nav-item active prof'>
        <img className='prof-img' src={user.picture} alt={user.name} />&emsp;
        <span className='prof-text'>{user.name}</span>
      </li>
    
  )} 

      {isAuthenticated===false &&    <li className="nav-item active">
          <button className="nav-link"  onClick={ context.handleLogin} >Login</button>
        </li>}
{isAuthenticated && (<li className="nav-item active">
          <button className="nav-link" onClick={context.handleLogout} >Logout</button>
        </li>)}

        
        <li className="nav-item">
          <Link className="nav-link" to='/Contact'  >Contact</Link>
        </li>
          {isAuthenticated && (<li className="nav-item active  " >
        <Link  style={{textDecoration:'none' }} to='/Cart'> <button className="nav-link fs-4 btn-cart "  
     > <MdAddShoppingCart /></button></Link> 
        </li>)}
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Nav;
