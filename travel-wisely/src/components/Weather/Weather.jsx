import { Box, Grid, Tab, Tabs, Typography, Switch, styled } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from "./styles";
import {FaThermometerThreeQuarters} from "react-icons/fa";
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';


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
            <Typography component="div">{children}</Typography>
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
      const { location, forecast, current, alert } = weatherData;
      console.log(location, forecast, current, alert);
      const [units, setUnits] = useState(true);
      const dayType = current.condition.icon.includes('night');

      const handleToggleUnits = (event) => {
        setUnits(event.target.checked);
      };

      // Create a Date object from the input string
      const newDate = new Date(location.localtime);

      // Format the time component as 12-hour format with AM/PM
      const time = newDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

      // Format the date component as mm/dd/yyyy
      const date = `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`;

      //Get the weather type
      const weatherRegex = /\/(\d+)\.png$/;
      const weatherMatch = current.condition.icon.match(weatherRegex);
      const weatherType = weatherMatch ? weatherMatch[1] : null;

      const [tabNum, setTabNum] = useState(0);
      const handleChange = (event, newTabNum) => {
        setTabNum(newTabNum);
      };

      const overmorrow = new Date(forecast?.forecastday[2]?.date + 'T00:00:00').toLocaleString("en-US", { weekday: "long" });

      
  return (
    <div className={classes.weatherContainer}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Box>
        <Grid container style={{ marginBottom: '15px' }}>
          <Grid className={classes.unitsContainer} item xs={3}>
            Metric
            <MaterialUISwitch sx={{ m: 1 }} checked={units} onClick={handleToggleUnits}/>
            Imperial
          </Grid>
          <Grid item xs={6} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
          <Typography className={classes.locationName}>{location.name} <br/>{location.region}, {location.country}</Typography>
          </Grid>
          <Grid item xs={3} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant='body1' style={{ marginBottom: '15px' }}>Time: {time}</Typography>
            <Typography variant='body1'>Date: {date}</Typography>
          </Grid>
        </Grid>
  <Box className={classes.tabsContainer}>
  <Tabs
    className={classes.tabsStyles}
    indicatorColor="primary"
    onChange={handleChange}
    value={tabNum}
    variant='scrollable'
    aria-label="Weather Tab Selection"
  >
    <Tab className={classes.tabStyles} label="Real Time" {...a11yProps(0)} />
    <Tab className={classes.tabStyles} label="Today" {...a11yProps(1)} />
    <Tab className={classes.tabStyles} label="Tomorrow" {...a11yProps(2)} />
    <Tab className={classes.tabStyles} label={overmorrow} {...a11yProps(2)} />
  </Tabs>
  </Box>
        </Box>
        
</Box>
<TabPanel component='img' tabNum={tabNum} index={0} style={{ padding: '0px 24px' }}>
  <Grid container>
  <Grid className={classes.currentConditions} item xs={12} md={4}>
    <Grid item sm={5} md={7} className={classes.weatherIconContainerA}>
      <WeatherIcon dayType={dayType} weatherType={weatherType} />
    </Grid>
    <Grid className={classes.currentConditions_text} item sm={7} md={5}>
      <Typography className={classes.lgText} variant='h3'>{current.condition.text}</Typography>
      <Box className={classes.weatherIconContainerB}>
      <WeatherIcon dayType={dayType} weatherType={weatherType} />
      </Box>
      <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>Humidity: {current.humidity}%</Typography>
    </Grid>
    </Grid>



    {/* <Grid item xs={12} md={8} style={{ display: 'flex', alignItems: 'center' }}> */}

        <Grid item xs={6} md={2} className={classes.currentWindUV}>

          <Grid item xs={6} className={classes.currentWindUV_left}>
            <Typography className={classes.mdText} variant='body1'>W.Speed: </Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>W.Direction: </Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>UV: </Typography>
          </Grid>

          <Grid item xs={6} style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', marginLeft: '10px' }}>
            <Typography className={classes.mdText} variant='body1'>{units ? `${current.wind_mph} mph`: `${current.wind_kph} kph` }</Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>{current.wind_dir}</Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>{current.uv}</Typography>
          </Grid>

        </Grid>
        
      <Grid item xs={6} md={2} className={classes.currentTemperature}>
        <Grid item xs={1} sm={3} style={{ minWidth: '50px' }}>
          <Typography className={classes.weatherDist} variant='body1'><FaThermometerThreeQuarters className={classes.icons}/></Typography>
        </Grid>
        <Grid item xs={11} sm={9} className={classes.currentTempText}>
          <Typography variant='body1' style={{ fontSize: '1.4rem', marginTop: '30px' }}>{
          units ? 
          <><span className={classes.xlText}>{current.temp_f}</span> F{'\u00b0'}</>
          : 
          <><span className={classes.xlText}>{current.temp_c}</span> C{'\u00b0'}</> 
        }</Typography>
        <Typography className={classes.smText} variant='body1'>Feels like {
          units ? 
          <><span>{current.feelslike_f}</span> F{'\u00b0'}</>
          : 
          <><span>{current.feelslike_c}</span> C{'\u00b0'}</> 
        }</Typography>
        
        </Grid>
      </Grid>
    {/* </Grid> */}

    
    </Grid>
    
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
  weatherData: PropTypes.object,
};

export default Weather
