import React, { useState, useEffect } from 'react';
import { Navigate , Routes, Route, Link, useLocation} from 'react-router-dom';
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import axios from "axios";
import baseURL from '../baseURL';

const ListOfAllStartups = () => {
  const [startups, setStartups] = useState([]);
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( baseURL + 'startup/getAll/', {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });
        const data = response.data;
        setStartups(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(startups)

  if (!currentUser) {
    return <Navigate to="/InvestorLogin" />;
  }

  return (
    <div className='container-fluid px-md-5'>
      <h3>View All Startups you can invest in : </h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell><b>S.No.</b></TableCell>
              <TableCell><b>Startup Name</b></TableCell>
              <TableCell><b>Industry</b></TableCell>
              <TableCell><b>Current Valuation</b></TableCell>
              <TableCell><b>Equity Available on NowAcquire</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {startups.map((startup , i) => (
              <TableRow key={startup.userName}>
                <TableCell>{i+1}</TableCell>
                <TableCell>
                <Link to={`/ViewStartup/${startup._id}`} 
                style={{  color: "secondary" }}
                >
                  {startup.name}
                </Link>
                </TableCell>
                <TableCell>{startup.industry}</TableCell>
                <TableCell>{startup.financials.companyValuation ? ("₹"+startup.financials.companyValuation) : "Company Financials not yet updated"}</TableCell>
                <TableCell>{startup.financials.equityAvailableOnNA ? (startup.financials.equityAvailableOnNA + "%") : "Company Financials not yet updated"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListOfAllStartups;
