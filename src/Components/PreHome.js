import React , {useContext}from 'react';
import './css/PreHome.css';
import 'animate.css';
import { FaBagShopping } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md" ; 
import { useAuth0 } from '@auth0/auth0-react';
import noteContext from '../Context/notes/noteContext';




const PreHome = () => {
 
  const { loginWithRedirect ,logout, isAuthenticated } = useAuth0();

   const context = useContext(noteContext);




    return (
        <div className='back-pic'>
       
        <div className='container-fluid '>
            <div className='Headline-border typewriter'>
            
              <h1 className='Headline animate__animated animate__slideInLeft '>Anizon <span className='cart-size'> <MdShoppingCartCheckout /> </span> Trends
            </h1>
            </div>
            <h3 className=' headline2 animate__animated animate__slideInLeft'><pre>D i s ~ c o v e r</pre>
            <pre>S h <span className='animate__animated animate_tada'><FaBagShopping /></span> p</pre>
            <pre>L o v e</pre>
            
            </h3> 
           
            </div>
            <div>
            <button className='buttons' onClick={context.handleLogin}>
               <span className='sections'>
                    Register
               </span>
           </button>
            </div>
           <br/>
           <br/>
           <div>
            <button className='buttons' onClick={context.handleLogin}  >
               <span className='sections'>
                    Login
               </span>
           </button>
          
  </div>
         </div>       
      
    );
}

export default PreHome;
