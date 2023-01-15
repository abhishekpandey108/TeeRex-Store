import React from 'react';
import '../style.css'; 
import {useDispatch, useSelector} from "react-redux"
import { decrease_item_quantity, delete_cart_item, increase_item_quantity } from '../Redux/action/CartAction';
import {useNavigate} from "react-router-dom";

export default function Cart() {


  const {cartData}= useSelector((store)=>store.CartReducer);
  const dispatch=useDispatch();
  let totalPrice=0;

  

  return (
    <>
  
        <h3 style={{textAlign:'start',marginLeft: '10%'}}>Cart</h3>    
      
   
    <div className="cart_main">

       <div className="cart_content">
          {
            cartData.length? cartData.map((e)=>{
              {totalPrice += (e.price*e.currentQuantity)}
              return (
                <div className="cart_content_main" id={e.id}>

             <img src={e.imageURL} alt="pic" />
               <div className="priceBox">
                <p>{e.name}</p>
                <h4>Rs {e.price * e.currentQuantity}</h4>
               </div>
               <div className="button_box">
            

                <div className = "smallBtn">
                 <div style={{display:"inline",marginRight:'8px'}}>{e.currentQuantity}</div>

                  <button onClick={()=>{
                      dispatch(decrease_item_quantity(e.id))
                  }}>-</button>

                  <button onClick={()=>{
                     let ind = cartData.findIndex((e)=>e.currentQuantity > e.quantity);
                     if(ind !== -1){
                     alert("Item quantity limit has exceeded ")
                      return ;
                     }
                     dispatch(increase_item_quantity(e.id))
                  }}>+</button>

                  </div>
                 
                  <button className="dlt" onClick={()=>{
                      dispatch(delete_cart_item(e.id))
                  }}>Delete</button>
               </div>
          </div>
              )
            }):  <div>
                  <img src="https://media1.giphy.com/media/jtECu4KjK3cqiAUMyR/giphy.gif" alt="" />
            </div>
          }
          
        </div>

        <h4 style={{marginLeft:"13%" , marginTop:"10px"}}>Total amount : Rs {totalPrice === 0 ? "" : totalPrice}</h4>
    </div>

     
    
    </>
  )
}