import { combineReducers } from 'redux';
import cartReducer from './reducer.js';


const rootReducer = combineReducers({ cartReducer: cartReducer});

export default rootReducer;