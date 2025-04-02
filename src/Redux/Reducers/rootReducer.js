import { combineReducers } from "redux";
import allProductReducer from "./ProductReducer";
import allRecipesReducer from "./RecipesReducer";

const rootReducer = combineReducers({
  allProducts: allProductReducer,
  recipee: allRecipesReducer
});

export default rootReducer;
