import React,  {useEffect, useContext } from 'react';
import { Context } from '../Context/ContextProvider';
import '../style.css';
import Card from './Card';

import {useDispatch, useSelector } from 'react-redux';
import { get_product_request, product_filter } from '../Redux/action/ProductAction';


const Products = () => {


    const { selected} = useContext(Context);

    const {fetchedData, filterData, loading, error} = useSelector((store)=>store.productReducer);
    const data = filterData.length ? filterData : fetchedData;

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(product_filter(selected))
     },[selected])

   useEffect(()=>{
        dispatch(get_product_request())
   },[])


  return (
    <>
    
    <div className="products">
    {
                loading ? 
                <img className='loaderImg' src='https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif'/>
                 : error ? <img className='loaderImg' src='https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif' alt="pic" />
                  : 
                  data.map((item)=>{
                    return (
                  <Card item={item} key={item.id}/>
                    )
                })
    }
    </div>

    </>
  )
}

export default Products