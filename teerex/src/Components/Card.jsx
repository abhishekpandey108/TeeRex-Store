import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_cart_item } from '../Redux/action/CartAction';

export default function Card({item}) {
   const dispatch=useDispatch();
   const {cartData} = useSelector((store)=>store.CartReducer)

  

  return (
    <>
     <div className="product_card">
        <p className='product_title'>{item.name}</p>
        <img src={`${item.imageURL}`} alt=" PRODUCT IMAGES" />
         <div className="item_details">
            <p>Rs {item.price}</p>
            <button onClick={()=>{
              
                let idx=cartData.findIndex((pro)=>pro.id==item.id)
                console.log(idx);
                if(idx != -1){
                  alert("Item is already in the cart")
                  return 
                }
                
               dispatch(add_cart_item(item));
               alert(`${item.name} added to the cart`)
            }}>Add to Cart</button>
         </div>
     </div>
    
    </>
  )
}