import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { TableContainer,Table,TableBody,TableRow,TableCell,Paper } from "@material-ui/core";

const StartupProfile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  const companyName = currentUser.user1._doc.name;
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">

          <h3>
             Your Startup Profile
          </h3>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Company Name</TableCell>
                  <TableCell>{companyName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Industry</TableCell>
                  <TableCell>{currentUser.user1._doc.industry}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>{currentUser.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Registration No</TableCell>
                  <TableCell>{currentUser.user1._doc.registrationNo}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p> */}
          {/* <p>
        <strong>Id:</strong> {currentUser.id}
      </p> */}

        </div>
        <div className="col-6 text-right">
          <Button variant="outlined" color="secondary" >
            <Link to={"/UpdateStartupProfile"} style={{ textDecoration: 'none', color: "inherit" }}>
              Update your Financials and Profile
            </Link>
          </Button>
        </div>
      </div>


    </div>




  );
};

export default StartupProfile;
