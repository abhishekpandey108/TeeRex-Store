import './App.css';
import Navbar from './Components/Navbar';
import Lander from './Components/Lander';
import Filters from './Components/Filters';
import Products from './Components/Products';
import Cart from './Components/Cart';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Routes>
          
          <Route path="/" element={
            <>
              <Lander />
              <Filters />
              <Products />
            </>
          }
          />
         
          <Route path='/cart' element={<Cart />}  />
          
        </Routes>
   
    </div>
  );
}

export default App;
