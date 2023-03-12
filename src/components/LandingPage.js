import React, { useState, useRef } from "react";
import logo from "./images/logo.png";
import LandingNavbar from "./LandingNavbar.js";
import './components.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./components.css"
import { Routes, Route, Link, useLocation } from "react-router-dom";



const LandingPage = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <div className="container-fluid d-flex flex-column min-vh-100">
                <div className="column" >

                    <div className="row">
                        <div className="col-6 ">
                            <div className="row-6 d-flex align-items-center justify-content-center min-vh-70">
                                <img src={logo} className="BigLogo" alt="logo" />
                            </div>
                            <div className="row-6 d-flex align-items-right justify-content-center min-vh-70">
                                <center>
                                    <Typography
                                        variant="h3"
                                        noWrap
                                        component="a"
                                        href="/"
                                        color="secondary"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'none', md: 'flex' },
                                            fontWeight: 700,
                                            fontStyle: 'oblique',
                                            textDecoration: 'none',
                                            textAlign: 'center',
                                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                                            '&:hover': {
                                                color: 'secondary.main', // change the color on hover
                                                textDecoration: 'none', // remove the underline on hover
                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // add a shadow on hover
                                            },
                                        }}
                                    >
                                        {'        '} NowAcquire
                                    </Typography>
                                </center>
                            </div>

                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-center text-center" style={{flexDirection : "column",padding : "100px"}}>
                        <div className="row-6 d-flex align-items-center justify-content-center">
                            <p>
                            <Typography variant="h4">
                                Investing in Startups is Just One Click Away
                            </Typography>
                            </p>
                        </div>   
                        <div className="row-6 d-flex align-items-center justify-content-center">
                            <p>
                            <Button variant="contained" color="secondary" size="medium" style={{marginTop : '20px'}}>
                                <Link to={"/investorRegister"} style={{ textDecoration: 'none', color: "inherit" }}>
                                    Investor Signup
                                </Link>
                            </Button>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            <footer class="mt-auto h-20 w-100 justify-content-center" style={{ background: "#cec2e3",position : "fixed",left : "0px",bottom : "0px",width:"100%",margin:"0px",height : "70px" }} >
                <center>
                    Get Your First Equity Free . Limitations Apply .
                    <br></br>
                    Rights  Reserved
                </center>
            </footer>
            

        </ThemeProvider>
    );
};

export default LandingPage;
