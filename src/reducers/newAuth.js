import {
      INVESTOR_REGISTER_SUCCESS,
      INVESTOR_REGISTER_FAIL,
      INVESTOR_LOGIN_SUCCESS,
      INVESTOR_LOGIN_FAIL ,
      STARTUP_REGISTER_SUCCESS,
      STARTUP_REGISTER_FAIL,
      STARTUP_LOGIN_SUCCESS,
      STARTUP_LOGIN_FAIL, 		
  } from "../actions/types";
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };
  
  export default function (state = initialState , action) {
    const { type, payload } = action;
  
    switch (type) {
      case STARTUP_REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case STARTUP_REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case STARTUP_LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case STARTUP_LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
        case INVESTOR_REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case INVESTOR_REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case INVESTOR_LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case INVESTOR_LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }
  