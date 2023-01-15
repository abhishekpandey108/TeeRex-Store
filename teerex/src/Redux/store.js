import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { productReducer } from './reducer/ProductReducer';
import { CartReducer } from './reducer/CartReducer';
const rootReducer=combineReducers({ productReducer, CartReducer });


export const store= createStore(rootReducer,applyMiddleware(thunk));