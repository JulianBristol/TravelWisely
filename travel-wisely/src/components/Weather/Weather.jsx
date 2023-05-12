import { Box, Grid, Tab, Tabs, Typography, Switch, styled } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from "./styles";
import ThermostatIcon from '@mui/icons-material/Thermostat';
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
    const { location, forecast, current, alert } = weatherData[0];
    const [units, setUnits] = useState(true);
    const dayType = current.condition.icon.includes('night');
    console.log(units);
    console.log(weatherData[0]);

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


      
  return (
    <div className={classes.weatherContainer}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
        <Box>
        <Grid container style={{ marginBottom: '15px' }}>
          <Grid item xs={3} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            Metric
            <MaterialUISwitch sx={{ m: 1 }} checked={units} onClick={handleToggleUnits}/>
            Imperial
          </Grid>
          <Grid item xs={6} style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
          <Typography className={classes.locationName}>{location.name} <br/>{location.region}, {location.country}</Typography>
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
    <Tab className={classes.tabStyles} label="Real Time" {...a11yProps(0)} />
    <Tab className={classes.tabStyles} label="Today's Forecast" {...a11yProps(1)} />
    <Tab className={classes.tabStyles} label="Tomorrow's Forecast" {...a11yProps(2)} />
    <Tab className={classes.tabStyles} label="Overmorrow's Forecast" {...a11yProps(2)} />
  </Tabs>
  </Box>
        </Box>
        
</Box>
<TabPanel component='img' tabNum={tabNum} index={0}>
  <Grid container>
  <Grid item xs={12} md={4} style={{ display: 'flex', alignItems: 'center', background: 'purple' }}>
    <Grid item xs={7} md={6}style={{ display: 'flex', alignItems: 'center' }}>
      <WeatherIcon dayType={dayType} weatherType={weatherType} />
    </Grid>
    <Grid item xs={5} md={5} >
      <Typography variant='h3'>{current.condition.text}</Typography>
      <Typography variant='body1' style={{ fontSize: '1.4rem', marginTop: '30px' }}>Humidity: {current.humidity}%</Typography>
    </Grid>
    </Grid>



    <Grid item xs={12} md={8} style={{ display: 'flex', alignItems: 'center', background: 'blue' }}>

        <Grid item xs={6}style={{ display: 'flex', alignItems: 'end', flexDirection: 'row', marginLeft: '20px', background: 'pink' }}>

          <Grid item xs={6}style={{ display: 'flex', alignItems: 'end', flexDirection: 'column',  }}>
            <Typography variant='body1' style={{ fontSize: '1.3rem' }}>W.Speed: </Typography>
            <Typography variant='body1' style={{ fontSize: '1.3rem', marginTop: '30px' }}>W.Direction: </Typography>
            <Typography variant='body1' style={{ fontSize: '1.3rem', marginTop: '30px' }}>UV: </Typography>
          </Grid>

          <Grid item xs={6}style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', marginLeft: '10px' }}>
            <Typography variant='body1' style={{ fontSize: '1.3rem' }}>{units ? `${current.wind_mph} mph`: `${current.wind_kph} kph` }</Typography>
            <Typography variant='body1' style={{ fontSize: '1.3rem', marginTop: '30px' }}>{current.wind_dir}</Typography>
            <Typography variant='body1' style={{ fontSize: '1.3rem', marginTop: '30px' }}>{current.uv}</Typography>
          </Grid>

        </Grid>
        
      <Grid item xs={6}style={{ display: 'flex', alignItems: 'center', background: 'green' }}>
        <Grid item xs={2} >
          <Typography variant='body1' style={{ fontSize: '1.4rem', marginTop: '30px' }}>Wind Direction: {current.humidity}%</Typography>
        </Grid>
        <Grid item xs={10} >
          <Typography variant='body1' style={{ fontSize: '1.4rem', marginTop: '30px' }}>Wind Direction: {current.humidity}%</Typography>
        </Grid>
      </Grid>
    </Grid>

    
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
  weatherData: PropTypes.array,
};

export default Weather
