import axios from "axios";
import baseURL from "../baseURL";

const API_URL = baseURL;

const investor_register = (firstName, lastName, userName, email, password, contactNo) => {
  return axios.post(API_URL + "investor/signup", {
    firstName, lastName, userName, email, password, contactNo,
    //check order of these elements if it is necessary to be in an order
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
};

const investor_update_profile = (aadharNo, panNo , address , id ) => {
  return axios.post(API_URL + "investor/updateProfile/" + id , {
    aadharNo , panNo , address 
    //check order of these elements if it is necessary to be in an order
  },{
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
};

const investor_login = (userName, password) => {
  return axios
    .post(API_URL + "investor/signin", {
      userName,
      password,
    }, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const startup_register = (name, userName, password, registrationNo, email, contactNo, address, industry, dateOfIncorp) => {
  return axios.post(API_URL + "startup/signup", {
    name, userName, password, registrationNo, email, contactNo, address, industry, dateOfIncorp,
    //check order of these elements if it is necessary to be in an order
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
};

const startup_login = (userName, password) => {
  return axios
    .post(API_URL + "startup/signin", {
      userName,
      password,
    }, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const startup_update_profile = (companyValuation, promoterStake, angelStake, institutionalStake, equityOnNA,equityAvailableOnNA,equitySoldOnNA, id) => {
  return axios.post(API_URL + "startup/updateProfile/" + id , {
    financials : { companyValuation, promoterStake, angelStake, institutionalStake, equityOnNA,equityAvailableOnNA,equitySoldOnNA,},
    //check order of these elements if it is necessary to be in an order
  }, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
};

const logout = () => {
  localStorage.removeItem("user");
};


export default {
  investor_register, investor_login, startup_login, startup_register, logout, investor_update_profile , startup_update_profile
};
