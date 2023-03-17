import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, Box, Tabs, Tab } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useDispatch, useSelector } from "react-redux";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import axios from "axios";
import graph from "./images/graph.png";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "./utils/data";
import { Line } from "react-chartjs-2";
import baseURL from '../baseURL';
import { ContactSupportOutlined } from '@mui/icons-material';

Chart.register(CategoryScale);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  graphContainer: {
    height: 300,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paginationContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  companyTableContainer: {
    marginBottom: theme.spacing(4),
  },
  tableCell: {
    textAlign: 'center',
  },
  portfolioTableCell: {
    width: '20%',
    textAlign: 'center',
  },
  logoTableCell: {
    width: '10%',
    textAlign: 'center',
  },
  recommendationContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    height: 200,
    overflow: 'auto',
  },
  recommendationCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const pnlData = [
  { month: 'Jan', pnl: 5000 },
  { month: 'Feb', pnl: 7000 },
  { month: 'Mar', pnl: 9000 },
  { month: 'Apr', pnl: 12000 },
  { month: 'May', pnl: 15000 },
  { month: 'Jun', pnl: 18000 },
];

const movies = [
  { name: 'The Bamboo Company' , imageURL:"https://s3.ap-southeast-1.amazonaws.com/cdn.store-assets.com/s/220087/f/4624480.png"},
  { name: 'Entitle', imageURL: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/totv58wf5t14al4nqp2s' },
  { name: 'Techstars', imageURL: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/sfdhykaf0zcn2oavawe5' },
  { name: 'Podeum', imageURL: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/bn5oofempc3clkdmeokx' },
  { name: 'Nutty Yogi', imageURL: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/suu3rbq04luzz6ity1my' },
  { name: 'Beyond', imageURL: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/7775b203e6535b7a15c0' },
  { name: 'True Elements', imageURL: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/zzbcmww62bb9fnmkodwp' },
  { name: 'One Co', imageURL: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/988/posts/32707/image/Placeit_2.jpg" },
  { name: 'Connect', imageURL: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/01/Horizontal-Tech-Logo-Styles.png' },
  { name: 'Rivian', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Rivian_company_logo.jpg' },
  { name: 'Urban Monkey', imageURL: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/kso8obohxvdlgjyx0j76' },
  { name: 'Shivan', imageURL: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/dwyogvklp0f0xupqkhod' },
  { name: 'Raja Foods', imageURL: 'https://rajafoods.ca/wp-content/uploads/2019/04/3D_logo2.png' },
  // { name: 'Oyo1', imageURL: 'https://seeklogo.com/images/O/oyo-rooms-logo-6C301512FE-seeklogo.com.png' },
  // { name: 'One Co2', imageURL: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/988/posts/32707/image/Placeit_2.jpg" },
  // { name: 'Connect2', imageURL: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/01/Horizontal-Tech-Logo-Styles.png' },
  // { name: 'Ola2', imageURL: 'https://i.pinimg.com/originals/e9/3a/6e/e93a6ead3f6784c21a6620d1102ea88f.jpg' },
  // { name: 'Zomato2', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png' },
  // { name: 'Oyo2', imageURL: 'https://seeklogo.com/images/O/oyo-rooms-logo-6C301512FE-seeklogo.com.png' },
];

const recommendationData = [
  { id: 1, name: 'Company I' },
  { id: 2, name: 'Company J' },
  { id: 2, name: 'Company k' },
  { id: 2, name: 'Company l' },
  { id: 2, name: 'Company m' },
  { id: 2, name: 'Company n' },
  { id: 2, name: 'Company o' },
  { id: 2, name: 'Company p' },
  { id: 3, name: 'Company q' },]

const InvestorDashboard = () => {
  // const portfolioData = [
  //   { id: 1, logo: 'https://via.placeholder.com/50', name: 'Company A', percentage: 25, value: 5000 },
  //   { id: 2, logo: 'https://via.placeholder.com/50', name: 'Company B', percentage: 15, value: 3500 },
  //   { id: 3, logo: 'https://via.placeholder.com/50', name: 'Company C', percentage: 20, value: 7000 },
  //   { id: 4, logo: 'https://via.placeholder.com/50', name: 'Company D', percentage: 10, value: 2500 },
  //   { id: 5, logo: 'https://via.placeholder.com/50', name: 'Company E', percentage: 30, value: 9000 },
  //   { id: 6, logo: 'https://via.placeholder.com/50', name: 'Company F', percentage: 18, value: 6000 },
  //   { id: 7, logo: 'https://via.placeholder.com/50', name: 'Company G', percentage: 12, value: 4000 },
  //   { id: 8, logo: 'https://via.placeholder.com/50', name: 'Company H', percentage: 22, value: 8000 },
  // ];
  const [portfolioData , setPortfolioData] = useState([])
  const { user: currentUser } = useSelector((state) => state.auth);
  const userID = currentUser.id;
  const [thisUser, setThisUser] = useState([]);
  const [graphData,setGraphData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.month), 
    datasets: [
      {
        label: "Your Portfolio",
        data: Data.map((data) => data.portfolioValue),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  useEffect(() => {  
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]; 
    const fetchData = async () => {
      try {
        const response = await axios.get(baseURL+'investor/getProfile/' + userID, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        });
        setThisUser(response.data);
        let finalObj = []
        let monthWiseData = {}
        month.forEach(m => {
          monthWiseData[m] = 0
        })
        response.data.financials.investments.companies.forEach((company , i)=>{
          let object = {
            "id" : company._id,
            "logo" : i%5==0?"https://i.pinimg.com/originals/2a/c0/e1/2ac0e1d6d696233d061b9bc477fa3db2.jpg" : 
            i%5==1?"https://st2.depositphotos.com/1768926/7866/v/950/depositphotos_78666192-stock-illustration-a-logo-sample-logo-for.jpg":
            i%5==2?"https://marketplace.canva.com/EAFCJye4KFw/1/0/1600w/canva-medical-care-logo-template-social-media-sGC0GPPTt7o.jpg":
            i%5==3?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatPdsS8lH4Wd2yJcmPip7gaXICkTAGV5uug&usqp=CAU":
            i%5==4?"https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-cart-icon-designs-134743663.jpg":
            "https://as2.ftcdn.net/v2/jpg/02/14/17/29/1000_F_214172955_NkLRBP8ysaxTZLTG8EVWCRtqAgHSqsW3.jpg"
            ,
            "name" : company.name,
            "percentage" : company.equityOwned,
            "value" : company.currMarketValue
          }
          company.transactions.forEach(item=>{
            var d = new Date(item.date)
            // if( new Date().getMilliseconds() - d.getMilliseconds() > 2*15778800000){
            //   return
            // }
            var mo = month[d.getMonth()]
            if(mo){
                if(item.buy){
                  monthWiseData[mo] += parseInt(item.amount)
                }
                else{
                  monthWiseData[mo] -= parseInt(item.amount)
                }
            }
          })
          let id = 1
          const result = Object.keys(monthWiseData).map(item => {
            return{
              "id" : id++,
              "portfolioValue" : monthWiseData[item],
              "month" : item
            }
          })
          setGraphData(result)
          setChartData({
            labels: result.map((data) => data.month), 
            datasets: [
              {
                label: "Your Portfolio",
                data: result.map((data) => data.portfolioValue),
                backgroundColor: [
                  "rgba(75,192,192,1)",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
              }
            ]
          })
          finalObj.push(object)
        })
        setPortfolioData(finalObj);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fname = capitalizeFirstLetter(currentUser.user1._doc.firstName);
  const lname = capitalizeFirstLetter(currentUser.user1._doc.lastName);
  const space = " ";

  const classes = useStyles();

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  


function LineChart({ graphData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Your Portfolio Graph"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}


  const renderPortfolioTable = () => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const portfolioDataPaginated = portfolioData.slice(startIndex, endIndex);

    return (
      <div>
        <h5>Your Portfolio</h5>
        <TableContainer component={Paper} className={classes.companyTableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.logoTableCell}></TableCell>
                <TableCell><strong>Company Name</strong></TableCell>
                <TableCell><strong>Percentage Stake </strong></TableCell>
                <TableCell><strong>Current Value</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {portfolioDataPaginated.map((company) => (
                <TableRow key={company.id}>
                  <TableCell className={classes.logoTableCell}>
                    <img src={company.logo} alt={company.name} style={{width:"60px" , height:"60px"}}/>
                  </TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.percentage}%</TableCell>
                  <TableCell>₹{company.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {portfolioData.length > rowsPerPage && (
            <div className={classes.paginationContainer}>
              <Pagination
                count={Math.ceil(portfolioData.length / rowsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="small"
                showFirstButton
                showLastButton
                siblingCount={1}
                boundaryCount={1}
                renderItem={(item) => (
                  <PaginationItem
                    component={Button}
                    {...item}
                    disabled={item.type === 'start-ellipsis' || item.type === 'end-ellipsis'}
                  />
                )}
                prevIconButtonProps={{ size: 'small' }}
                nextIconButtonProps={{ size: 'small' }}
                siblingIconButtonProps={{ size: 'small' }}
                boundaryIconButtonProps={{ size: 'small' }}
                showZeroCount={false}
              />
            </div>
          )}
        </TableContainer>
      </div>
    );
  };

  const renderRecommendationList = () => {
    return (
      <div className="container-fluid border">
        <div className='row-4 border align-items-center justify-content-center'>
          <Typography variant="h4" gutterBottom>
            Other Companies You Can Invest In
          </Typography>
        </div>
        <div className='row-8 border align-items-center justify-content-center'>
          {recommendationData.map((company) => (
            <div className={classes.recommendationCard} key={company.id}>
              <Typography>{company.name}</Typography>
            </div>
          ))}
        </div>

      </div>
    );
  };
  const getObjects = () => {
    const objs = []
    for (var i = 0; i < currentUser.user1._doc.financials.investments.companies.length; i++) {
      objs.push(<div>{currentUser.user1._doc.financials.investments.companies[i].name}</div>)
    }
    return objs;
  }

  const RecommendedCompaniesList = () => {


    const handleScrollPosition = (direction) => {
      const container = document.getElementById('movie-list-container');
      const containerScrollPosition = container.scrollLeft;
      const containerWidth = container.clientWidth;

      if (direction === 'left') {
        setScrollPosition(containerScrollPosition - containerWidth);
      } else if (direction === 'right') {
        setScrollPosition(containerScrollPosition + containerWidth);
      }
    };

    return (
      <Box sx={{ maxWidth: "100%", bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: "center" }}>
          Other Companies You Can Invest In
        </Typography>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {
            movies.map((movie) => {
              return (
                <Tab sx={{ width: "300px" }} label={movie.name} icon={<img src={movie.imageURL} width="100px" />} />
              )
            })
          }
        </Tabs>
      </Box>
    );
  };

  return (
    <div className='container-fluid'>
      <div className='col'>
        <div className='row-1'>
          <Typography variant="h4" gutterBottom>
            Welcome to your Dashboard <strong>{fname + space + lname + space + "!"}</strong>
          </Typography>
        </div>
        <div className='row-8 d-flex'>
          <div className='col-5 ' style={{flexDirection : "column"}}>
          <h5>Your Portfolio Graph</h5>
          <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Your Portfolio Graph"
            },
            legend: {
              display: false
            }
          }
        }}
      />
          </div>
          <div className='col-7'>
            {renderPortfolioTable()}
          </div>
        </div>
        <div className='row-3'>
          <div className='h-25 strict'>
            {RecommendedCompaniesList()}
          </div>


        </div>
      </div>
    </div>

  );
};

export default InvestorDashboard;