import { STATUSES } from "../actions/infoActions";
import {
    GET_INFO_REQUEST,
    GET_INFO_SUCCESS,
    GET_INFO_FAILURE,
} from "./types/infoTypes";

  const InitialState = {
    infoList: [],
    loading: false,
    request: STATUSES.IDLE,
    error: null,
  };
  
  function infoReducer(state = InitialState, action) {
    switch (action.type) {
      case GET_INFO_REQUEST:
        return {
          ...state,
          request: STATUSES.REQUEST,
          loading: true,
          error: null,
        };
  
      case GET_INFO_SUCCESS:

        return {
          ...state,
          type_List: [...state.type_List, action.payload],
          request: STATUSES.SUCCESS,
          loading: false,
        };
  
      case GET_INFO_FAILURE:
        return {
          ...state,
          request: STATUSES.FAILURE,
          error: action.payload,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  
  export default infoReducer;