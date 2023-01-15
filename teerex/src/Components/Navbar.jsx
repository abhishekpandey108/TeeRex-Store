import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style.css';


const Navbar = () => {

  const {cartData }= useSelector((store)=>store.CartReducer);

  return (
    <>
        <div className="navbar">
            <Link to='/'><h3>TeeRex Store</h3></Link>
            <div className="rightIcon">
              <Link to='/'><span>Products</span></Link>
              <Link to='/cart'>
                <span> 
                  <i class="fa fa-shopping-cart" aria-hidden="true" id='cartIcon'>
                  <span className='cartCount'>{cartData.length?cartData.length:""}</span>
                    </i>
                </span>
                
              </Link>
            </div>
        </div>
    </>
  )
}

export default Navbar