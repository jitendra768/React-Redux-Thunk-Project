import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "../Constant/ActionTypes";

  
  const initialState = {
    data: null,
    isLoading: false,
    error: null,
  };
  
  const allProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_REQUEST:
        return { ...state, isLoading: true, error: null };
  
      case FETCH_DATA_SUCCESS:
        return { ...state, data: action.payload, isLoading: false };
      case FETCH_DATA_FAILURE:
        return { ...state, error: action.payload, isLoading: false };
      default:
       return state;
    }
  };
  
  export default allProductReducer;
  