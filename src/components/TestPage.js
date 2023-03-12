import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
//import { Routes, Route, Link, useLocation } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
//import Register from "./Register";
import { investor_login } from "../actions/newAuth";
//here login function is imported
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const InvestorLogin = (props) => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const userName = e.target.value;
    setUsername(userName);
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
      dispatch(investor_login(username, password))
        .then(() => {
          navigate("/InvestorDashboard");
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
    return <Navigate to="/InvestorDashboard" />;
  }

  return (
    <div className="container-fluid">
      <div className="card card-container">
        <center>Investor Login</center>
        <br></br>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>

          

           <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
{/*
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          <div className="form-group">
          <TextField 
          label="Username" 
          color="secondary"
          id="outlined-size-small" 
          defaultValue="" 
          InputLabelProps={{ shrink: true }}  
          value={username}
          onChange={onChangeUsername}
          validations={[required]}
          />
          </div>

          <div className="form-group">
            <Button variant="contained" color="secondary" size="small" disabled={loading}>
            {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span> 
            </Button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
      {/* <div className="extra link">
        <center>
        not registered ? <Link to={"/register"} className="nav-link">
          Sign Up
        </Link> instead
        </center>

        <Routes>

          <Route path="/register" element={<Register />} />

        </Routes>
      </div> */}
    </div>

  );
};

export default InvestorLogin;
