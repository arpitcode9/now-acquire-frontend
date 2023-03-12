import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Routes, Route, Link, useLocation } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
//import Login from "./Login";
import { investor_update_profile } from "../actions/newAuth";
import { TextField, Button, Typography } from "@mui/material";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const UpdateInvestorProfile = () => {
  const form = useRef();
  const checkBtn = useRef();
  const { user: currentUser } = useSelector((state) => state.auth);

  const [aadharNo, setAadhar] = useState("");
  const [panNo, setPan] = useState("");
  const [address, setAddress] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const id = currentUser.id;
  const onChangeAadhar = (e) => {
    const aadharNo = e.target.value;
    setAadhar(aadharNo);
  };
  const onChangePan = (e) => {
    const panNo = e.target.value;
    setPan(panNo);
  };
  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(investor_update_profile(aadharNo, panNo, address, id))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          Update Investor Profile
        </Typography>
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleUpdateProfile} ref={form}>
          {!successful && (
            <div>
              <TextField
                value={aadharNo}
                name="username"
                onChange={onChangeAadhar}
                type={"number"}
                sx={{ marginRight: "6%", width: "100%", marginBottom: "40px" }}
                id="outlined-basic"
                label="Aadhar No."
                variant="outlined"
                color="secondary"
                required
              />
              <TextField
                value={panNo}
                name="username"
                onChange={onChangePan}
                type={"text"}
                sx={{ marginRight: "6%", width: "100%", marginBottom: "40px" }}
                id="outlined-basic"
                label="Pan No."
                variant="outlined"
                color="secondary"
                required
              />
              <TextField
                value={address}
                name="username"
                onChange={onChangeAddress}
                type={"text"}
                sx={{ marginRight: "6%", width: "100%", marginBottom: "40px" }}
                id="outlined-basic"
                label="Address"
                variant="outlined"
                color="secondary"
                required
              />
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                style={{ width: "80%", marginLeft: "10%" }}
              >
                Update Profile
              </Button>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
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
      {/* <div className="extra link">
      <center>
        Already registered ? <Link to={"/login"} className="nav-link">
          Sign IN
        </Link> instead</center>

        <Routes>

          <Route path="/login" element={<Login />} />

        </Routes>
      </div> */}
    </div>
  );
};

export default UpdateInvestorProfile;
