import { combineReducers } from 'redux';
//import {someReducer} from './someReducer';
import cardReducers from './cardReducers';



export default combineReducers({
  //some: someReducer;
  cardReducer:cardReducers
});