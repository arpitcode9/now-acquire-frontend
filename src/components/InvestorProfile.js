import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UpdateInvestorProfile from "./UpdateInvestorProfile";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Button from '@mui/material/Button';

const InvestorProfile = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const fname = currentUser.user1._doc.firstName;
    const lname = currentUser.user1._doc.lastName;
    const space = " ";
    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="container">
            <div className="row">
            <div className="col-6">
            <p>
                <h3>
                    Welcome <strong>{capitalizeFirstLetter(fname) + space + capitalizeFirstLetter(lname)+"!"}</strong>
                </h3>
            </p>

            

            {/* <p>
                <strong>Id:</strong> {currentUser.id}
            </p> */}
            <p>
                <strong>Username:</strong> {currentUser.userName}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            <p>
                <strong>Contact No:</strong> {currentUser.user1._doc.contactNo}
            </p>
            {currentUser.user1._doc.aadharNo ? (
                <p>
                <strong>Aadhar No:</strong> {currentUser.user1._doc.aadharNo}
            </p>
            ):<></>}
            {currentUser.user1._doc.panNo ? (
                <p>
                <strong>PAN No:</strong> {currentUser.user1._doc.panNo}
            </p>
            ):<></>}
            {currentUser.user1._doc.address ? (
                <p>
                <strong>Address:</strong> {currentUser.user1._doc.address}
            </p>
            ):<></>}

            </div>
            <div className="col-6 text-right">
            <Button color="secondary" variant ="outlined">
                <Link to={"/UpdateInvestorProfile"} style={{ textDecoration: 'none', color: "inherit" }}>
                    <ManageAccountsIcon fontSize="small" />Update your Profile (KYC)
                </Link>
            </Button>
            </div>
            </div>

            
        </div>
    );
};

export default InvestorProfile;
