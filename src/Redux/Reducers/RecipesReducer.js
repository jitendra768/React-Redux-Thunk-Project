import {
  GET_RECIPES_FAILURE,
  GET_RECIPES_REQUEST,
  GET_RECIPES_SUCCESS,
} from "../Constant/ActionTypes";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const allRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_REQUEST:
      return { ...state, isLoading: true, error: null };

    case GET_RECIPES_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case GET_RECIPES_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default allRecipesReducer;
