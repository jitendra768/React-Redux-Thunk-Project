import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../Constant/ActionTypes";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await axios.get("https://dummyjson.com/products");
      dispatch(fetchDataSuccess(response.data.products));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
