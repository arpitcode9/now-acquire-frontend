import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import UserDashboard from "./components/UserDashboard";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import InvestorLogin from "./components/InvestorLogin";
import InvestorRegister from "./components/InvestorRegister";
import StartupRegister from "./components/StartupRegister";
import StartupLogin from "./components/StartupLogin";
import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import LandingNavbar from "./components/LandingNavbar";
import StartupDashboard from "./components/StartupDashboard";
import InvestorDashboard from "./components/InvestorDashboard";
import ViewStartup from "./components/ViewStartup";
import ListOfAllStartups from "./components/ListOfAllStartups";
import UpdateInvestorProfile from "./components/UpdateInvestorProfile";
import UpdateStartupProfile from "./components/UpdateStartupProfile";
/////////////////
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from "./components/images/logo.png"
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import StartupProfile from "./components/StartupProfile";
import InvestorProfile from "./components/InvestorProfile";
import TestPage from "./components/TestPage";
/////////////////////////////

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));






const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const [showInvestorBoard, setShowInvestorBoard] = useState(false);
  const [showStartupBoard, setShowStartupBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {

    if (currentUser) {
      setShowInvestorBoard(currentUser.role.includes("investor"));
      setShowStartupBoard(currentUser.role.includes("startup"));
    } else {
      setShowInvestorBoard(false);
      setShowStartupBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
      window.location.reload(false);
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);


  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  /////code from landing navbar
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/startupLogin"} style={{ textDecoration: 'none', color: "inherit" }}>
          Startup Login
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/investorLogin"} style={{ textDecoration: 'none', color: "inherit" }}>
          Investor Login
        </Link>
      </MenuItem>
    </Menu>
  );
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  /////code from landing navbar
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

  return (
    <div >        
      <ThemeProvider theme={theme} >
      <div className="pb-md-3">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <img src={logo} style={{ width: 40, height: 40 }} alt="navbarlogo" className='SmallLogo' />
              <Typography
                variant="h6"
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
                  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    color: 'secondary.main', // change the color on hover
                    textDecoration: 'none', // remove the underline on hover
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // add a shadow on hover
                  },
                }}
              >
                NowAcquire
              </Typography>
              {showInvestorBoard && (
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              )}
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                <Stack direction="row" spacing={2}>
{/* 
                  <Button color="secondary">
                    <Link to={"/TestPage"}>
                      TestPage
                    </Link>
                  </Button> */}

                  {showStartupBoard && (
                    <>
                      <Button color="secondary">
                        <Link to={"/StartupDashboard"} style={{ textDecoration: 'none', color: "inherit" }}>
                          Startup Dashboard
                        </Link>
                      </Button>
                      <Button color="secondary" >
                        <Link to={"/StartupProfile"} style={{ textDecoration: 'none', color: "inherit" }}>
                          <PersonIcon fontSize="small" />{currentUser.userName}
                        </Link>
                      </Button>
                    </>

                  )}

                  {showInvestorBoard && (

                    <Button color="secondary">
                      <Link to={"/InvestorDashboard"} style={{ textDecoration: 'none', color: "inherit" }}>
                        Investor Dashboard
                      </Link>
                    </Button>
                  )}

                  {showInvestorBoard && (
                    <>
                      <Button color="secondary">
                        <Link to={"/ListOfAllStartups"} style={{ textDecoration: 'none', color: "inherit" }}>
                          All Startups
                        </Link>
                      </Button>
                      <Button color="secondary" >
                        <Link to={"/InvestorProfile"} style={{ textDecoration: 'none', color: "inherit" }}>
                          <PersonIcon fontSize="small" />{currentUser.userName}
                        </Link>
                      </Button>
                    </>
                  )}
                  {currentUser ? (
                    <>
                      <Button color="secondary">
                        <Link to={"/"} style={{ textDecoration: 'none', color: "inherit" }} onClick={logOut}>
                          LogOut
                        </Link>
                      </Button>
                    </>
                  ) : (<>
                    <Button color="secondary">Invest</Button>
                    <Button color="secondary">About</Button>
                    <Button color="secondary">Support</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={handleProfileMenuOpen}>Login</Button>
                    <Button variant="contained" color="secondary" size="small">
                      <Link to={"/startupRegister"} style={{ textDecoration: 'none', color: "inherit" }}>
                        Startup Register
                      </Link>
                    </Button>
                    <Button variant="contained" color="secondary" size="small">
                      <Link to={"/investorRegister"} style={{ textDecoration: 'none', color: "inherit" }}>
                        Investor Signup
                      </Link>
                    </Button>
                  </>
                  )}
                  {/* <Button variant="outlined" color="secondary" size="small">Outlined</Button> */}
                </Stack>

              </Box>

            </Toolbar>
          </AppBar>
          {renderMenu}
        </Box>
        </div>

        <div>


          <div >
            <Routes>
              <Route path="/" element={showInvestorBoard ? <InvestorDashboard /> : showStartupBoard ? <StartupDashboard /> : <LandingPage />} />
              <Route path="/userdashboard" element={<UserDashboard />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
              <Route path="/mod" element={<BoardModerator />} />
              <Route path="/admin" element={<BoardAdmin />} />
              <Route path="/investorLogin" element={<InvestorLogin />} />
              <Route path="/investorRegister" element={<InvestorRegister />} />
              <Route path="/startupLogin" element={<StartupLogin />} />
              <Route path="/startupRegister" element={<StartupRegister />} />
              <Route path="/StartupDashboard" element={<StartupDashboard />} />
              <Route path="/InvestorDashboard" element={<InvestorDashboard />} />
              <Route path="/ListOfAllStartups" element={<ListOfAllStartups />} />
              <Route path="/ViewStartup/:id" element={<ViewStartup />} />
              <Route path="/UpdateInvestorProfile" element={<UpdateInvestorProfile />} />
              <Route path="/UpdateStartupProfile" element={<UpdateStartupProfile />} />
              <Route path="/StartupProfile" element={<StartupProfile />} />
              <Route path="/InvestorProfile" element={<InvestorProfile />} />
              <Route path="/TestPage" element={<TestPage/>} />

            </Routes>
          </div>

          {/* <AuthVerify logOut={logOut}/> */}
        </div>
      </ThemeProvider>

    </div>
  );
};

export default App;
