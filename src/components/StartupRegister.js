import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Routes, Route, Link, useLocation } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { startup_register } from "../actions/newAuth";
import { Box, Grid, TextField, Button } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import logo from "./images/logo.png";
import { clearMessage } from '../actions/message';
import TermsAndConditions from "./TermsAndConditions";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const StartupRegister = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfIncorp, setDateOfIncorp] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [registrationNo, setRegistratonNo] = useState("");
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [modeOfReach, setModeOfReach] = useState("");
  const [agentName, setAgentName] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTncMarked, setTncMarked] = useState(false);
  const [isAgentName, setShowAgentName ] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const onChangeUserName = (e) => {
    const userName = e.target.value;
    setUserName(userName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeDateOfIncorp = (value) => {
    const dateOfIncorp = `${value["$y"]}-${value["$M"]}-${value["$D"]}`;
    setDateOfIncorp(dateOfIncorp);
  };
  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };
  const onChangeContactNo = (e) => {
    const contactNo = e.target.value;
    setContactNo(contactNo);
  };
  const onChangeRegistrationNo = (e) => {
    const registrationNo = e.target.value;
    setRegistratonNo(registrationNo);
  };

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeIndustry = (e) => {
    const industry = e.target.value;
    setIndustry(industry);
  };
  const onChangeModeOfReach = (e) => {
    const modeOfReach = e.target.value;
    if(e.target.value === "now-acquire-agent"){
      setShowAgentName(true)
    }
    else{
      setShowAgentName(false)
      setAgentName("")
    }
    setModeOfReach(modeOfReach);
  };
  const onChangeAgentName = (e) => {
    const agentName = e.target.value;
    setAgentName(agentName);
  };
  const onChangeVideoLink = (e) => {
    const videoLink = e.target.value;
    setVideoLink(videoLink);
  };
  const handleOpenDialog = () => {
    setIsOpen(true);
  };
  const handleCloseDialog = () => {
    setIsOpen(false);
  };
  const handleTncMarked = (event) => {
    setTncMarked(!isTncMarked);
  };

  const handleRegister = (e) => {
    console.log("I am Called");
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(
        startup_register(
          name,
          userName,
          password,
          registrationNo,
          email,
          contactNo,
          address,
          industry,
          dateOfIncorp,
          modeOfReach,
          agentName,
          videoLink,
        )
      )
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };
  // console.log(videoLink , modeOfReach , agentName);

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
          <div style={{ paddingRight: "20%" }}>
            <h4 style={{ textAlign: "center", marginBottom: "20px" }}>Startup Register</h4>
            <div>
              <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                  <div>
                    <div style={{ marginBottom: "20px" }}>
                      <TextField
                        value={name}
                        name="name"
                        onChange={onChangeName}
                        type={"text"}
                        sx={{ marginRight: "6%", width: "47%" }}
                        id="outlined-basic"
                        label="Company Name"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                      <TextField
                        value={userName}
                        name="userName"
                        onChange={onChangeUserName}
                        type={"text"}
                        sx={{ width: "47%" }}
                        id="outlined-basic"
                        label="Username"
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
                        sx={{ marginRight: "6%", width: "47%" }}
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                      <TextField
                        value={password}
                        name="password"
                        onChange={onChangePassword}
                        type={"password"}
                        sx={{ width: "47%" }}
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <TextField
                        value={registrationNo}
                        name="registrationNo"
                        onChange={onChangeRegistrationNo}
                        type={"text"}
                        sx={{ marginRight: "6%", width: "47%" }}
                        id="outlined-basic"
                        label="Registration Number"
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
                    <div style={{ marginBottom: "20px" }}>
                      <TextField
                        value={address}
                        name="address"
                        onChange={onChangeAddress}
                        type={"text"}
                        sx={{ width: "100%" }}
                        id="outlined-basic"
                        label="Address"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                      <TextField
                        value={videoLink}
                        name="videoLink"
                        onChange={onChangeVideoLink}
                        type={"text"}
                        sx={{ width: "100%" }}
                        id="outlined-basic"
                        label="Video Link"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                    </div>
                    <div style={{ marginBottom: "20px", flexDirection: "row", display: "flex" }}>
                      <TextField
                        value={industry}
                        name="industry"
                        onChange={onChangeIndustry}
                        type={"text"}
                        sx={{ marginRight: "6%", width: "47%" }}
                        id="outlined-basic"
                        label="Industry"
                        variant="outlined"
                        color="secondary"
                        required
                      />
                      <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DatePicker']} sx={{ padding: "0px" }}>
                            <DatePicker
                              value={dayjs(dateOfIncorp)}
                              name="dateOfIncorp"
                              onChange={(value) => { onChangeDateOfIncorp(value) }}
                              format={"YYYY-MM-DD"}
                              sx={{ width: "100%" }}
                              id="outlined-basic"
                              label="Date Of Incopration"
                              variant="outlined"
                              color="secondary"
                              required
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div style={{ marginBottom: "20px", flexDirection: "row", display: "flex" }}>
                      <FormControl sx={{ marginRight: "6%", width: "67%" }}>
                        <InputLabel id="demo-simple-select-helper-label">How did you know about NowAcquire ?</InputLabel>
                        <Select
                          value={modeOfReach}
                          name="modeOfReach"
                          onChange={onChangeModeOfReach}
                          
                          id="outlined-basic"
                          label="How did you know about NowAcquire ?"
                          variant="outlined"
                          color="secondary"
                          required
                        >
                          <MenuItem value="website">Website</MenuItem>
                          <MenuItem value="social-media">Social Media</MenuItem>
                          <MenuItem value="conferences">Conferences</MenuItem>
                          <MenuItem value="newspaper">Newspaper</MenuItem>
                          <MenuItem value="now-acquire-agent">Now Acquire Agent</MenuItem>
                        </Select>
                      </FormControl>

                      <div>
                        <TextField
                          value={agentName}
                          name="agentName"
                          onChange={onChangeAgentName}
                          type={"text"}
                          sx={{ width: "100%" }}
                          id="outlined-basic"
                          label="Agent Name"
                          variant="outlined"
                          color="secondary"
                          hidden={!isAgentName}
                        />
                      </div>
                    </div>
                    <label>
                      <input type="checkbox" onChange={handleTncMarked} value={isTncMarked} />
                      I agree to the{' '}
                      <a href="#" onClick={handleOpenDialog}>
                        Terms and Conditions
                      </a>
                    </label>
                    <TermsAndConditions isOpen={isOpen} handleCloseDialog={() => handleCloseDialog()} />
                    <Button disabled={!isTncMarked} variant="contained" color="secondary" type="submit" style={{ width: "80%", marginLeft: "10%" , marginBottom: "20px"}}>
                      Sign Up Your Startup
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

export default StartupRegister;
