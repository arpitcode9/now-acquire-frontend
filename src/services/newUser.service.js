import axios from "axios";
import baseURL from "../baseURL";
import authHeader from "./auth-header";

const API_URL = baseURL;
//change this API URL

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};


//these APIs have to be created
const getAllStartupsList = () => {
    return axios.get(API_URL + "getAllStartupsList");
  };
//these APIs have to be created
const getLatestInvestorInfo = () => {
    return axios.get(API_URL + "getLatestInvestorInfo", { headers: authHeader() });
};
//these APIs have to be created
//this is api for get latest startup info , it is doubtful that authouristion is required for this or not
const getLatestStartupInfo = () => {
    // return axios.get(API_URL + "getLatestStartupInfo", { headers: authHeader() });
    return axios.get(API_URL + "getLatestStartupInfo", { headers: authHeader() });
};


export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getAllStartupsList,
  getLatestInvestorInfo,
  getLatestStartupInfo,

};