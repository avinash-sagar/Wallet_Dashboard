import { createStore } from "redux";
// import {balanceReducer} from "./reducer"


import { combineReducers } from 'redux'; 
import balanceReducer from "./reducer";


 const store = createStore(combineReducers({
   balance: balanceReducer
 }))

 export default store;