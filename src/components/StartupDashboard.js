import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useDispatch, useSelector } from "react-redux";
import getLatestStartupInfo from "../services/newUser.service";
import baseURL from '../baseURL';


const StartupDashboard = () => {

  const { user: currentUser } = useSelector((state) => state.auth);

  const [currentUserStartup, setCurrentUserStartup] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL + 'startup/getProfile/'+id);
        const data = await response.json();
        setCurrentUserStartup(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const id = currentUser.id;
  const companyName = currentUser.user1._doc.name;


  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>
        Welcome to your Dashboard <strong>{companyName}</strong> !
      </Typography>

      {currentUserStartup.financials ?
        (
          <TableContainer component={Paper} sx={{width : "60%"}}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Current Company Valuation</TableCell>
                  <TableCell>₹ {currentUserStartup.financials.companyValuation}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Stake held by Promoters</TableCell>
                  <TableCell>{currentUserStartup.financials.promoterStake}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Stake held by Angel Investors</TableCell>
                  <TableCell>{currentUserStartup.financials.angelStake}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Stake held by Institutional Investors</TableCell>
                  <TableCell>{currentUserStartup.financials.institutionalStake}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Stake diversified on NowAcquire</TableCell>
                  <TableCell>{currentUserStartup.financials.equityOnNA}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Stake Bought by investors on NowAcquire</TableCell>
                  <TableCell>{currentUserStartup.financials.equitySoldOnNA}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Stake Available for investors on NowAcquire</TableCell>
                  <TableCell>{currentUserStartup.financials.equityAvailableOnNA}%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) :
        <div>
          Please go to profile page and Update your Financials
        </div>}
    </div>
  );
};

export default StartupDashboard;
