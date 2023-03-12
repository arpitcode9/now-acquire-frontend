import React, { useState, useRef , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
//import { Routes, Route, Link, useLocation } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
//import Register from "./Register";
import { startup_login } from "../actions/newAuth";
import LandingPage from "./LandingPage";
import { Box, Grid, TextField, Button } from "@mui/material";
//here login function is imported
import logo from "./images/logo.png";
import { clearMessage } from '../actions/message';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const StartupLogin = (props) => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const onChangeuserName = (e) => {
    const userName = e.target.value;
    setuserName(userName);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(startup_login(userName, password))
        .then(() => {
          navigate("/startupDashboard");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/startupDashboard" />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            src={logo}
            alt="not found"
            width={"70%"}
            style={{ paddingTop: "5%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <div style={{ paddingRight: "20%",paddingTop : "15%" }}>
            <h4 style={{ textAlign: "center", marginBottom: "20px" }}>
              Startup Login
            </h4>
            <div>
              <Form onSubmit={handleLogin} ref={form}>
                <TextField
                  value={userName}
                  name="userName"
                  onChange={onChangeuserName}
                  type={"text"}
                  sx={{ marginRight: "6%", width: "100%",marginBottom : "40px" }}
                  id="outlined-basic"
                  label="UserName"
                  variant="outlined"
                  color="secondary"
                  required
                />
                <TextField
                  value={password}
                  name="password"
                  onChange={onChangePassword}
                  type={"password"}
                  sx={{ marginRight: "6%", width: "100%",marginBottom : "40px"}}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  color="secondary"
                  required
                />
                <Button variant="contained" color="secondary" type="submit" disabled={loading} style={{width : "80%",marginLeft : "10%"}}>
                {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                )}
                  Log-In
                </Button>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {" "}
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
              </Form>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StartupLogin;
