import {
    GET_INFO_REQUEST,
    GET_INFO_SUCCESS,
    GET_INFO_FAILURE,
  } from "../store/types/infoTypes";
  
  export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
  };
  
  export const getInfoRequest = () => ({
    info: GET_INFO_REQUEST,
  });
  
  export const getInfoSuccess = (info) => ({
    info: GET_INFO_SUCCESS,
    payload: info,
  });
  
  export const getInfoFailure = (err) => ({
    info: GET_INFO_FAILURE,
    payload: err,
  });

 
  export const getRandomInfo = () => async (dispatch) => {
    dispatch(getInfoRequest());
  
    try {
      const response = await 
      fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const result = await response.json();
      dispatch(getInfoSuccess(result));
    } catch (err) {
      dispatch(getInfoFailure(err.message));
    }
  };
  
  export const getInfoByRoboName = (dogs) => async (dispatch) => {
    dispatch(getInfoRequest());
    try {
      const response = await 
      fetch(
        `https://dog.ceo/dog-api/${dogs}`
      );
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const result = await response.json();
      dispatch(getInfoSuccess(result));
    } catch (err) {
      dispatch(getInfoFailure(err.message));
    }
  };