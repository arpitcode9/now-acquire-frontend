import React, { useState, useEffect } from "react";
import { Navigate, useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SnackBar from "@material-ui/core/Snackbar";
import { SnackbarContent } from "@mui/material";
import baseURL from "../baseURL";
import { TableContainer,Table,TableBody,TableRow,TableCell,Paper } from "@material-ui/core";

const ViewStartup = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [open, setThisOpen] = useState(false);
  const [snackBarOpen,setSnackBarOpen] = useState(false);
  const userID = currentUser.id;
  const [thisStartup, setThisStartup] = useState([]);
  const [thisUser, setThisUser] = useState([]);
  const [percentage, setPercentage] = useState(0)
  const [selectedType,setSelectedType] = useState(null);
  const [amount,setAmount] = useState(0);
  const [alertMessage,setAlertMessage] = useState(null)
  const [alertColor,setAlertColor] = useState('teal')

  const buyTransaction = () =>{
    setThisOpen(true)
    setSelectedType("BUY")
  }
  const sellTransaction = ()=>{
    setThisOpen(true);
    setSelectedType("SELL")
  }
  const handlePercentage = event =>{
    if(  selectedType === "BUY" && event.target.value > thisStartup.financials.equityAvailableOnNA){
      setAlertColor('red')
      setAlertMessage("Sorry you can't buy this much :(")
      setAmount(0)
      setPercentage(0)
      setSnackBarOpen(true)
      
      return
    }
    if( selectedType === "SELL" && event.target.value > 100){
      setAlertColor('red')
      setAlertMessage("Sorry you can't sell this much :(")
      setPercentage(0)
      setAmount(0)
      setSnackBarOpen(true)
      return
    }
    let x = (event.target.value*thisStartup.financials.companyValuation)/100
    setAmount(x)
    setPercentage(event.target.value)
  }
  const handleClose = () => {
    setThisOpen(false)
    setPercentage(0)
  }
  const handleSubmit = async () => {
    await axios.post(baseURL + "investor/transaction",{
      "userName" : thisUser.userName,
      "transactionType" : selectedType,
      "amount": amount,
      "percentage": percentage,
      "company" : thisStartup.userName
    }).then(msg=>{
      if(msg.status === 200){
        setAlertColor('green')
        setAlertMessage("Transaction completed ")
        setSnackBarOpen(true)
      }
      else{
        setAlertColor('red')
        setAlertMessage("Transaction Failed ")
        setSnackBarOpen(true)
      }
      setPercentage(0)
      setAmount(0)
      setSelectedType("BUY")
      setThisOpen(false)
    })
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL + 'startup/getProfile/' + id, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });
        setThisStartup(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL + 'investor/getProfile/' + userID, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });
        setThisUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!currentUser) {
    return <Navigate to="/InvestorLogin" />;
  }


  return (
    <div className="container">

      <h3 color="secondary">Company Name : {thisStartup.name}</h3>
      {/* <h1>current user is : {currentUser.userName}</h1> */}
      {thisStartup.financials && (
        <>
          <h5>
            Financials
          </h5>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
              <TableRow>
                  <TableCell>Industry</TableCell>
                  <TableCell>{thisStartup.industry}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Company Valuation :</TableCell>
                  <TableCell>₹{thisStartup.financials.companyValuation}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Stake held by Promoters</TableCell>
                  <TableCell>{thisStartup.financials.promoterStake}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Stake held by Angel Investors</TableCell>
                  <TableCell>{thisStartup.financials.angelStake}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Stake held by Institutional Investors</TableCell>
                  <TableCell>{thisStartup.financials.institutionalStake}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total Stake diversified on NowAcquire</TableCell>
                  <TableCell>{thisStartup.financials.equityOnNA}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Stake already Sold On NowAcquire</TableCell>
                  <TableCell>{thisStartup.financials.equitySoldOnNA}%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Stake Avaialable On NowAcquire</TableCell>
                  <TableCell>{thisStartup.financials.equityAvailableOnNA}%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>)
      }



      <Button onClick = {()=>buyTransaction()} color="success" variant="contained">
        <Link style={{ textDecoration: 'none', color: "inherit" }} >
          BUY Stake
        </Link>
      </Button>
      {" "}
      <Button onClick = {()=>sellTransaction()} color="error" variant="contained">
        <Link style={{ textDecoration: 'none', color: "inherit" }} >
          SELL Stake
        </Link>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-apartment"
      >
        <DialogTitle id="edit-apartment">Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please, fill in the percentage of equity you wish to buy
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            value={amount}
            id="Amount in Rupees"
            label="Amount in Rupees"
            type="text"
            readOnly
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            value={percentage}
            onChange = {handlePercentage}
            id="flat"
            label="Percentage Of Equity"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      < SnackBar
        open={snackBarOpen}
        onClose={handleClose}
        autoHideDuration={2000}
      >
         <SnackbarContent style={{
              backgroundColor: alertColor,
            }}
            message={<span id="client-snackbar">{alertMessage}</span>}
          />
        </SnackBar>
    </div>
  );
};

export default ViewStartup;
