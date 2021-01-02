import { combineReducers } from 'redux';
import cartReducer from './cartReducer.js';
import selectReducer from './selectReducer.js';
import getReducer from './getReducer.js';


const rootReducer = combineReducers({ cart: cartReducer, selected: selectReducer, dbItems: getReducer});

export default rootReducer;