import React,{useContext} from 'react';
import { Context } from '../Context/ContextProvider';
import '../style.css'; 
const Filters = () => {
    const { selected, setSelected } = useContext(Context);

    const selectHandler = (e) => {
        const {checked,value}=e.target;
        if(checked){
         setSelected([...selected,value]);
        }
        else{
           setSelected([...selected.filter((e)=>e !== value)])
        }
    }



  return (
    <>
    
    <div className='filterBox'>
             
            <div className="checkBox">
                <h4>Colour</h4>
                <div className="check">
                <input type="checkbox" name=""  onChange={selectHandler} value={'Red'} /> <label>Red</label>
                </div>
                <div className="check">
                <input type="checkbox" name="" onChange={selectHandler}  value={"Blue"} /> <label>Blue</label>
                </div>
                <div className="check">
                <input type="checkbox" name="" onChange={selectHandler} value={'Green'} /> <label>Green</label>
                </div>
            </div>
              
              <div className="checkBox">
                <h4>Gender</h4>
                <div className="check">
                <input type="checkbox" name="" onChange={selectHandler} value={'Men'} /> <label>Men</label>
                </div>
                <div className="check">
                <input type="checkbox" name="" onChange={selectHandler} value={"Women"} /> <label>Women</label>
                </div>
            </div>
           
            <div className="checkBox">
                <h4>Price</h4>
                <div className="check">
                <input type="checkbox" name="" onChange={selectHandler} value={'250'} /> <label>0- Rs 250</label>
                </div>
                <div className="check">
                <input type="checkbox" name="" onChange={selectHandler} value={"251"} /> <label>Rs 251-450</label>
                </div>
                <div className="check">
                <input type="checkbox" name="" onChange={selectHandler} value={'450'} /> <label> Rs 450</label>
                </div>
            </div>
       
             <div className="checkBox">
                <h4>Type</h4>
                <div className="check">
                <input type="checkbox" name="" onChange={selectHandler} value={'Polo'} /> <label htmlFor="">Polo</label>
                </div>
                <div className="check">
                <input type="checkbox" name="" onChange={selectHandler} value={"Hoodie"} /> <label htmlFor="">Hoodie</label>
                </div>
                <div className="check">
                <input type="checkbox" name="" onChange={selectHandler} value={'Basic'} /> <label htmlFor="">Basic</label>
                </div>
            </div>
             
        </div>

    </>
  )
}

export default Filters