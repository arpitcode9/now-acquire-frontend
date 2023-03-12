import * as React from 'react';
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
import logo from "./images/logo.png"
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './components.css';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import InvestorLogin from "./InvestorLogin";
import InvestorRegister from "./InvestorRegister";
import StartupRegister from "./StartupRegister";
import StartupLogin from "./StartupLogin";
import { useDispatch, useSelector } from "react-redux";

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

export default function Navbar1(props) {
    console.log(props);
    const { user: currentUser } = useSelector((state) => state.auth);
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
            <MenuItem onClick={handleMenuClose}>StartUp Login</MenuItem>
            <MenuItem onClick={handleMenuClose}>Investor Login</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <p>Home</p>
            </MenuItem>
            <MenuItem>
                <p>About</p>
            </MenuItem>
            <MenuItem>
                <p>Learn</p>
            </MenuItem>
            <MenuItem>
                <p>Support</p>
            </MenuItem>
            <MenuItem>
                <p>Login</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <p>SignUp</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className='container-fluid'>
            <ThemeProvider theme={theme} >
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
                            {/* <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search> */}
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                                <Stack direction="row" spacing={2}>
                                    <Button color="secondary">Invest</Button>
                                    <Button color="secondary">About</Button>
                                    <Button color="secondary">Learn</Button>
                                    <Button color="secondary">Support</Button>
                                    <Button variant="contained" color="secondary" size="small" onClick={handleProfileMenuOpen}>Login</Button>
                                    <Button variant="contained" color="secondary" size="small" >Startup's Signup</Button>
                                    <Button variant="contained" color="secondary" size="small" ><Link to={"/investorRegister"} className="nav-link">Investor's Signup</Link></Button>
                                    {/* <Button variant="outlined" color="secondary" size="small">Outlined</Button> */}
                                </Stack>

                                {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="small"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    Login
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton> */}
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                </Box>
            </ThemeProvider>
            
        </div>
    );
}