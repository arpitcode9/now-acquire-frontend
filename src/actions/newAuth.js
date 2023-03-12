import {
    SET_MESSAGE,
    INVESTOR_REGISTER_SUCCESS,
    INVESTOR_REGISTER_FAIL,
    INVESTOR_LOGIN_SUCCESS,
    INVESTOR_LOGIN_FAIL ,
    STARTUP_REGISTER_SUCCESS,
    STARTUP_REGISTER_FAIL,
    STARTUP_LOGIN_SUCCESS,
    STARTUP_LOGIN_FAIL,
    STARTUP_UPDATE_PROFILE_FAIL,
    STARTUP_UPDATE_PROFILE_SUCCESS,
    INVESTOR_UPDATE_PROFILE_SUCCESS,
    INVESTOR_UPDATE_PROFILE_FAIL,
  } from "./types";
  
import AuthService from "../services/auth.service";
import NewAuthService from "../services/newAuth.service";


  export const investor_register = (firstName , lastName , userName, email, password , contactNo) => (dispatch) => {
    return NewAuthService.investor_register(firstName , lastName , userName, email, password , contactNo).then(
      (response) => {
        dispatch({
          type: INVESTOR_REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: INVESTOR_REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };


  export const investor_update_profile = (aadharNo , panNo , address , id) => (dispatch) => {
    return NewAuthService.investor_update_profile(aadharNo , panNo , address , id).then(
      (response) => {
        dispatch({
          type: INVESTOR_UPDATE_PROFILE_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: INVESTOR_UPDATE_PROFILE_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const investor_login = (userName, password) => (dispatch) => {
    return NewAuthService.investor_login(userName, password).then(
      (data) => {
        dispatch({
          type: INVESTOR_LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: INVESTOR_LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const startup_register = (name , userName,  password ,registrationNo,email,contactNo , address , industry , dateOfIncorp) => (dispatch) => {
    return NewAuthService.startup_register(name , userName,  password ,registrationNo,email,contactNo , address , industry , dateOfIncorp).then(
      (response) => {
        dispatch({
          type: STARTUP_REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: STARTUP_REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const startup_update_profile = (companyValuation, promoterStake, angelStake, institutionalStake, equityOnNA,equityAvailableOnNA,equitySoldOnNA, id) => (dispatch) => {
    return NewAuthService.startup_update_profile(companyValuation, promoterStake, angelStake, institutionalStake, equityOnNA,equityAvailableOnNA,equitySoldOnNA, id).then(
      (response) => {
        dispatch({
          type: STARTUP_UPDATE_PROFILE_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: STARTUP_UPDATE_PROFILE_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const startup_login = (userName, password) => (dispatch) => {
    return NewAuthService.startup_login(userName, password).then(
      (data) => {
        dispatch({
          type: STARTUP_LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: STARTUP_LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };	