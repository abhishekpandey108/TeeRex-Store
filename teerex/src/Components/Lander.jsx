import React,{useContext} from 'react';
import { useDispatch } from 'react-redux';
import { Context } from '../Context/ContextProvider';
import {product_search} from '../Redux/action/ProductAction';

const Lander = () => {
  const dispatch = useDispatch();

    const { search, setSearch } = useContext(Context);
    console.log(search);

    const searchData = () =>{
        dispatch( product_search(search.split(" ")) );
    }

    
  return (
    <>
      
      <div className="searchBox">
        <input type="text" placeholder='Search for products...' onChange={(e)=>{
           setSearch(e.target.value)}
        }  
       
        />
         <div className="searchIconBox" onClick={searchData} >
            <i class="fa fa-search" aria-hidden="true"></i>
         </div>
     </div>


    </>
  )
}

export default Lander
