import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Routes, Route, Link, useLocation } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
//import Login from "./Login";
import { investor_register } from "../actions/newAuth";
import { Box ,Grid ,TextField,Button } from "@mui/material";
import logo from "./images/logo.png";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vContactNo = (value) => {
  if (value.length === 10) {
    return (
      <div className="alert alert-danger" role="alert">
        The Contact no should be of 10 Digits
      </div>
    );
  }
};

const InvestorRegister = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  };
  const onChangeLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  };
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeContactNo = (e) => {
    const contactNo = e.target.value;
    setContactNo(contactNo);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(investor_register(firstName , lastName , username, email, password , contactNo))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

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
          <div style={{ paddingRight: "20%",paddingTop : "8%"}}>
            <h4 style={{textAlign : "center",marginBottom : "20px"}}>Investor Register</h4>
            <div>
              <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                  <div>
                    <div style={{ marginBottom: "20px" }}>
                      <TextField
                        value={firstName}
                        name="userName"
                        onChange={onChangeFirstName}
                        type={"text"}
                        sx={{ marginRight: "6%", width: "47%" }}
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                      <TextField
                        value={lastName}
                        name="userName"
                        onChange={onChangeLastName}
                        type={"text"}
                        sx={{ width: "47%" }}
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <TextField
                        value={email}
                        name="email"
                        onChange={onChangeEmail}
                        type={"email"}
                        sx={{ width: "100%" }}
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <TextField
                        value={password}
                        name="password"
                        onChange={onChangePassword}
                        type={"password"}
                        sx={{ width: "100%" }}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                    <TextField
                        value={username}
                        name="username"
                        onChange={onChangeUsername}
                        type={"text"}
                        sx={{ marginRight: "6%", width: "47%" }}
                        id="outlined-basic"
                        label="UserName"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                      <TextField
                        value={contactNo}
                        name="contactNo"
                        onChange={onChangeContactNo}
                        type={"number"}
                        sx={{ width: "47%" }}
                        id="outlined-basic"
                        label="Contact Number"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                    </div>
                    <Button variant="contained" color="secondary" type="submit" style={{width : "80%",marginLeft : "10%"}}>
                      Sign Up As An Investor
                    </Button>
                  </div>
                )}

                {message && (
                  <div className="form-group">
                    <div
                      className={
                        successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
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

export default InvestorRegister;
