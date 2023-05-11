import { Box, Grid, Tab, Tabs, Typography, Switch, styled } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from "./styles";
import PropTypes from 'prop-types';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function TabPanel(props) {
    const { children, tabNum, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={tabNum !== index}
        id={`day-tabpanel-${index}`}
        aria-labelledby={`day-tab-${index}`}
        {...other}
      >
        {tabNum === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    /* Not too sure what value is being supplied here */
    /* value: PropTypes.number.isRequired, */
  };



  function a11yProps(index) {
    return {
      id: `day-tab-${index}`,
      'aria-controls': `day-tabpanel-${index}`,
    };
  }



const Weather = ({ weatherData }) => {
    const classes = useStyles();
    const [tempScale, setTempScale] = useState(true);
    console.log(tempScale);
    const { location, forecast, current, alert } = weatherData[0];

    const handleToggleTempScale = (event) => {
      setTempScale(event.target.checked);
    };

    // Create a Date object from the input string
    const newDate = new Date(location.localtime);

    // Format the time component as 12-hour format with AM/PM
    const time = newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    // Format the date component as mm/dd/yyyy
    const date = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;
    

    const [tabNum, setTabNum] = useState(0);
    const handleChange = (event, newTabNum) => {
        setTabNum(newTabNum);
      };


      
  return (
    <div className={classes.weatherContainer}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Box>
        <Typography className={classes.locationName}>{location.name} <br/>{location.region}, {location.country}</Typography>
        <Grid container>
          <Grid item xs={3} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            C&deg;
            <MaterialUISwitch sx={{ m: 1 }} checked={tempScale} onClick={handleToggleTempScale}/>
            F&deg;
          </Grid>
          <Grid item xs={6} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            Test
          </Grid>
          <Grid item xs={3} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant='body1'>Time: {time}</Typography>
            <Typography variant='body1'>Date: {date}</Typography>
          </Grid>
        </Grid>
  <Box sx={{ borderBottom: "2px solid RGBA(120, 120, 0, 0.7)", marginLeft: "25px", display: "flex", alignItems: "end", }}>
  <Tabs
    className={classes.tabsStyles}
    indicatorColor="primary"
    onChange={handleChange}
    value={tabNum}
    aria-label="Weather Tab Selection"
  >
    <Tab variant="" label="Real Time" {...a11yProps(0)} />
    <Tab label="Today's Forecast" {...a11yProps(1)} />
    <Tab label="Tomorrow's Forecast" {...a11yProps(2)} />
    <Tab label="Overmorrow's Forecast" {...a11yProps(2)} />
  </Tabs>
  </Box>
        </Box>
        
</Box>
<TabPanel tabNum={tabNum} index={0}>
  Item One
</TabPanel>
<TabPanel tabNum={tabNum} index={1}>
  Item Two
</TabPanel>
<TabPanel tabNum={tabNum} index={2}>
  Item Three
</TabPanel>
<TabPanel tabNum={tabNum} index={3}>
  Item Four
</TabPanel>
    </div>
  )
}

Weather.propTypes = {
  weatherData: PropTypes.array,
};

export default Weather
