import { Box, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from "./styles";
import PropTypes from 'prop-types';

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
    value: PropTypes.number.isRequired,
  };



  function a11yProps(index) {
    return {
      id: `day-tab-${index}`,
      'aria-controls': `day-tabpanel-${index}`,
    };
  }



const Weather = () => {
    const classes = useStyles();
    const TEMP_LOCATION_NAME = "Edenwald";
    const TEMP_LOCATION_REGION = "New York";
    const TEMP_LOCATION_COUNTRY = "USA";
    const [tabNum, setTabNum] = useState(0);
    const handleChange = (event, newTabNum) => {
        setTabNum(newTabNum);
      };


      
  return (
    <div className={classes.weatherContainer}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Grid container xs={12} >
        <Typography className={classes.locationName}>{TEMP_LOCATION_NAME} <span><br/></span>{TEMP_LOCATION_REGION}, {TEMP_LOCATION_COUNTRY}</Typography>
  <Box sx={{ borderBottom: "2px solid RGBA(120, 120, 0, 0.7)", marginLeft: "25px", display: "flex", alignItems: "end", }}>
  <Tabs className={classes.tabsStyles} indicatorColor="red" tabNum={tabNum} onChange={handleChange} aria-label="Weather Tab Selection">
    <Tab variant="" label="Real Time" {...a11yProps(0)} />
    <Tab label="Today's Forecast" {...a11yProps(1)} />
    <Tab label="Tomorrow's Forecast" {...a11yProps(2)} />
    <Tab label="Day's Forecast" {...a11yProps(2)} />
  </Tabs>
  </Box>
        </Grid>
        
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




      {/* 
    location": {
    "name": "Sunnyside",
    "region": "New York",
    "country": "United States of America",
    }
    "current": {
    "last_updated_epoch": 1666113300,
    "last_updated": "2022-10-18 13:15",
    "temp_c": 11.1,
    "temp_f": 52,
    "current": {
    "last_updated_epoch": 1666113300,
    "last_updated": "2022-10-18 13:15",
    "temp_c": 11.1,
    "temp_f": 52,
    "humidity": 44,
    "cloud": 100,
    "feelslike_c": 9,
    "feelslike_f": 48.2,
    "uv": 4,
    
    
    */}
    </div>
  )
}

export default Weather
