import { combineReducers } from "redux";
import allProductReducer from "./ProductReducer";

const rootReducer = combineReducers({
  allProducts: allProductReducer,
 
});

export default rootReducer;
