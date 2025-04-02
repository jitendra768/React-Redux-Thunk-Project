import axios from "axios";
import {
  GET_RECIPES_FAILURE,
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
} from "../Constant/ActionTypes";

export const fetchRecipesRequest = () => ({
  type: GET_RECIPES_REQUEST,
});

export const fetchRecipesSuccess = (data) => ({
  type: GET_RECIPES_SUCCESS,
  payload: data,
});

export const fetchRecipesFailure = (error) => ({
  type: GET_RECIPES_FAILURE,
  payload: error,
});

export const fetchRecipes = () => {
  return async (dispatch) => {
    dispatch(fetchRecipesRequest());
    try {
      const response = await axios.get('https://dummyjson.com/recipes');
      dispatch(fetchRecipesSuccess(response.data.recipes));
    } catch (error) {
      dispatch(fetchRecipesFailure(error.message));
    }
  };
};
