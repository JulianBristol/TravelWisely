import { Box, Grid, Tab, Tabs, Typography, Switch, styled, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
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

  const TimeSelect = ({ day, test, fn }) => {
    return (
      <FormControl style={{ width: '150px', marginBottom: '20px' }}>
        <InputLabel id={`time-${day}-select-label`}>Select Time: </InputLabel>
        <Select
          labelId={`time-${day}-select-label`}
          id={`time-${day}-select`}
          value={test}
          label="Today's Time"
          onChange={fn}
        >
          <MenuItem value={0}>12:00am</MenuItem>
          <MenuItem value={1}>1:00am</MenuItem>
          <MenuItem value={2}>2:00am</MenuItem>
          <MenuItem value={3}>3:00am</MenuItem>
          <MenuItem value={4}>4:00am</MenuItem>
          <MenuItem value={5}>5:00am</MenuItem>
          <MenuItem value={6}>6:00am</MenuItem>
          <MenuItem value={7}>7:00am</MenuItem>
          <MenuItem value={8}>8:00am</MenuItem>
          <MenuItem value={9}>9:00am</MenuItem>
          <MenuItem value={10}>10:00am</MenuItem>
          <MenuItem value={11}>11:00am</MenuItem>
          <MenuItem value={12}>12:00pm</MenuItem>
          <MenuItem value={13}>1:00pm</MenuItem>
          <MenuItem value={14}>2:00pm</MenuItem>
          <MenuItem value={15}>3:00pm</MenuItem>
          <MenuItem value={16}>4:00pm</MenuItem>
          <MenuItem value={17}>5:00pm</MenuItem>
          <MenuItem value={18}>6:00pm</MenuItem>
          <MenuItem value={19}>7:00pm</MenuItem>
          <MenuItem value={20}>8:00pm</MenuItem>
          <MenuItem value={21}>9:00pm</MenuItem>
          <MenuItem value={22}>10:00pm</MenuItem>
          <MenuItem value={23}>11:00pm</MenuItem>
        </Select>
      </FormControl>
    )
  }


  const Weather = ({ weatherData }) => {
      const classes = useStyles();
      const { location, forecast, current, alert } = weatherData;
      console.log(location, forecast, current, alert);
      const [units, setUnits] = useState(true);

      const [timeToday, setTimeToday] = useState('8');
      const [timeTomorrow, setTimeTomorrow] = useState('8');
      const [timeOvermorrow, setTimeOvermorrow] = useState('8');

      const handleToggleUnits = (event) => {
        setUnits(event.target.checked);
      };

      const handleTimeTodayChange = (event) => {
        setTimeToday(event.target.value);
      };

      const handleTimeTomorrowChange = (event) => {
        setTimeTomorrow(event.target.value);
      };

      const handleTimeOvermorrowChange = (event) => {
        setTimeOvermorrow(event.target.value);
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
<TabPanel component='img' tabNum={tabNum} index={0} style={{ padding: '0px 10px 10px' }}>
  <Grid container>
  <Grid className={classes.currentConditions} item xs={12} md={4}>
    <Grid item sm={5} md={7} className={classes.weatherIconContainerA}>
      <WeatherIcon weatherConditions={current.condition} />
    </Grid>
    <Grid className={classes.currentConditions_text} item sm={7} md={5}>
      <Typography className={classes.lgText} variant='h3'>{current.condition.text}</Typography>
      <Box className={classes.weatherIconContainerB}>
      <WeatherIcon weatherConditions={current.condition} />
      </Box>
      <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>Humidity: {current.humidity}%</Typography>
    </Grid>
    </Grid>

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

    
    </Grid>
    
</TabPanel>
<TabPanel component='img' tabNum={tabNum} index={1} style={{ padding: '0px 10px 10px' }}>
  <TimeSelect day={'today'} test={timeToday} fn={handleTimeTodayChange}/>


  <Grid container>
  <Grid className={classes.currentConditions} item xs={12} md={4}>
    <Grid item sm={5} md={7} className={classes.weatherIconContainerA}>
      <WeatherIcon weatherConditions={forecast.forecastday[0].hour[timeToday].condition} />
      {console.log(forecast.forecastday[0].hour[timeToday])}
    </Grid>
    <Grid className={classes.currentConditions_text} item sm={7} md={5}>
      <Typography className={classes.lgText} variant='h3'>{forecast.forecastday[0].hour[timeToday].condition.text}</Typography>
      <Box className={classes.weatherIconContainerB}>
      <WeatherIcon weatherConditions={forecast.forecastday[0].hour[timeToday].condition} />
      </Box>
      <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>Humidity: {forecast.forecastday[0].hour[timeToday].humidity}%</Typography>
      <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>Visiblity: {units ? `${forecast.forecastday[0].hour[timeToday].vis_miles} miles`
          : 
          `${forecast.forecastday[0].hour[timeToday].vis_km} k` }</Typography>
    </Grid>
    </Grid>

        <Grid item xs={6} md={2} className={classes.currentWindUV}>

          <Grid item xs={6} className={classes.currentWindUV_left}>
            <Typography className={classes.mdText} variant='body1'>W.Speed: </Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>W.Direction: </Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>UV: </Typography>
          </Grid>

          <Grid item xs={6} style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', marginLeft: '10px' }}>
            <Typography className={classes.mdText} variant='body1'>{units ? `${forecast.forecastday[0].hour[timeToday].wind_mph} mph`: `${forecast.forecastday[0].hour[timeToday].wind_kph} kph` }</Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>{forecast.forecastday[0].hour[timeToday].wind_dir}</Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>{forecast.forecastday[0].hour[timeToday].uv}</Typography>
          </Grid>

        </Grid>
        
      <Grid item xs={6} md={2} className={classes.currentTemperature}>
        <Grid item xs={1} sm={3} style={{ minWidth: '50px' }}>
          <Typography className={classes.weatherDist} variant='body1'><FaThermometerThreeQuarters className={classes.icons}/></Typography>
        </Grid>
        <Grid item xs={11} sm={9} className={classes.currentTempText}>
          <Typography variant='body1' style={{ fontSize: '1.4rem', marginTop: '30px' }}>{
          units ? 
          <><span className={classes.xlText}>{forecast.forecastday[0].hour[timeToday].temp_f}</span> F{'\u00b0'}</>
          : 
          <><span className={classes.xlText}>{forecast.forecastday[0].hour[timeToday].temp_c}</span> C{'\u00b0'}</> 
        }</Typography>
        <Typography className={classes.smText} variant='body1'>Feels like {
          units ? 
          <><span>{forecast.forecastday[0].hour[timeToday].feelslike_f}</span> F{'\u00b0'}</>
          : 
          <><span>{forecast.forecastday[0].hour[timeToday].feelslike_c}</span> C{'\u00b0'}</> 
        }</Typography>
        
      <Typography className={`${classes.smText}`} variant='body1'>Pressure: {units ? `${forecast.forecastday[0].hour[timeToday].pressure_in} psi`
          : 
          `${forecast.forecastday[0].hour[timeToday].pressure_mb} mb` }</Typography>
        </Grid>
      </Grid>
    {/* </Grid> */}

    
    </Grid>

































</TabPanel>
<TabPanel component='img' tabNum={tabNum} index={2} style={{ padding: '0px 10px 10px' }}>
  <TimeSelect day={'tomorrow'} test={timeTomorrow} fn={handleTimeTomorrowChange}/>


  <Grid container>
  <Grid className={classes.currentConditions} item xs={12} md={4}>
    <Grid item sm={5} md={7} className={classes.weatherIconContainerA}>
      <WeatherIcon weatherConditions={forecast.forecastday[1].hour[timeTomorrow].condition} />
      {console.log(forecast.forecastday[1].hour[timeTomorrow])}
    </Grid>
    <Grid className={classes.currentConditions_text} item sm={7} md={5}>
      <Typography className={classes.lgText} variant='h3'>{forecast.forecastday[1].hour[timeTomorrow].condition.text}</Typography>
      <Box className={classes.weatherIconContainerB}>
      <WeatherIcon weatherConditions={forecast.forecastday[1].hour[timeTomorrow].condition} />
      </Box>
      <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>Humidity: {forecast.forecastday[1].hour[timeTomorrow].humidity}%</Typography>
      <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>Visiblity: {units ? `${forecast.forecastday[1].hour[timeTomorrow].vis_miles} miles`
          : 
          `${forecast.forecastday[1].hour[timeTomorrow].vis_km} k` }</Typography>
    </Grid>
    </Grid>

        <Grid item xs={6} md={2} className={classes.currentWindUV}>

          <Grid item xs={6} className={classes.currentWindUV_left}>
            <Typography className={classes.mdText} variant='body1'>W.Speed: </Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>W.Direction: </Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>UV: </Typography>
          </Grid>

          <Grid item xs={6} style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', marginLeft: '10px' }}>
            <Typography className={classes.mdText} variant='body1'>{units ? `${forecast.forecastday[1].hour[timeTomorrow].wind_mph} mph`: `${forecast.forecastday[1].hour[timeTomorrow].wind_kph} kph` }</Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>{forecast.forecastday[1].hour[timeTomorrow].wind_dir}</Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>{forecast.forecastday[1].hour[timeTomorrow].uv}</Typography>
          </Grid>

        </Grid>
        
      <Grid item xs={6} md={2} className={classes.currentTemperature}>
        <Grid item xs={1} sm={3} style={{ minWidth: '50px' }}>
          <Typography className={classes.weatherDist} variant='body1'><FaThermometerThreeQuarters className={classes.icons}/></Typography>
        </Grid>
        <Grid item xs={11} sm={9} className={classes.currentTempText}>
          <Typography variant='body1' style={{ fontSize: '1.4rem', marginTop: '30px' }}>{
          units ? 
          <><span className={classes.xlText}>{forecast.forecastday[1].hour[timeTomorrow].temp_f}</span> F{'\u00b0'}</>
          : 
          <><span className={classes.xlText}>{forecast.forecastday[1].hour[timeTomorrow].temp_c}</span> C{'\u00b0'}</> 
        }</Typography>
        <Typography className={classes.smText} variant='body1'>Feels like {
          units ? 
          <><span>{forecast.forecastday[1].hour[timeTomorrow].feelslike_f}</span> F{'\u00b0'}</>
          : 
          <><span>{forecast.forecastday[1].hour[timeTomorrow].feelslike_c}</span> C{'\u00b0'}</> 
        }</Typography>
        
      <Typography className={`${classes.smText}`} variant='body1'>Pressure: {units ? `${forecast.forecastday[1].hour[timeTomorrow].pressure_in} psi`
          : 
          `${forecast.forecastday[1].hour[timeTomorrow].pressure_mb} mb` }</Typography>
        </Grid>
      </Grid>
    {/* </Grid> */}

    
    </Grid>

</TabPanel>

<TabPanel component='img' tabNum={tabNum} index={3} style={{ padding: '0px 10px 10px' }}>
  <TimeSelect day={'overmorrow'} test={timeOvermorrow} fn={handleTimeOvermorrowChange}/>


  <Grid container>
  <Grid className={classes.currentConditions} item xs={12} md={4}>
    <Grid item sm={5} md={7} className={classes.weatherIconContainerA}>
      <WeatherIcon weatherConditions={forecast.forecastday[2].hour[timeOvermorrow].condition} />
      {console.log(forecast.forecastday[2].hour[timeOvermorrow])}
    </Grid>
    <Grid className={classes.currentConditions_text} item sm={7} md={5}>
      <Typography className={classes.lgText} variant='h3'>{forecast.forecastday[2].hour[timeOvermorrow].condition.text}</Typography>
      <Box className={classes.weatherIconContainerB}>
      <WeatherIcon weatherConditions={forecast.forecastday[2].hour[timeOvermorrow].condition} />
      </Box>
      <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>Humidity: {forecast.forecastday[2].hour[timeOvermorrow].humidity}%</Typography>
      <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>Visiblity: {units ? `${forecast.forecastday[2].hour[timeOvermorrow].vis_miles} miles`
          : 
          `${forecast.forecastday[2].hour[timeOvermorrow].vis_km} k` }</Typography>
    </Grid>
    </Grid>

        <Grid item xs={6} md={2} className={classes.currentWindUV}>

          <Grid item xs={6} className={classes.currentWindUV_left}>
            <Typography className={classes.mdText} variant='body1'>W.Speed: </Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>W.Direction: </Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>UV: </Typography>
          </Grid>

          <Grid item xs={6} style={{ display: 'flex', alignItems: 'start', flexDirection: 'column', marginLeft: '10px' }}>
            <Typography className={classes.mdText} variant='body1'>{units ? `${forecast.forecastday[2].hour[timeOvermorrow].wind_mph} mph`: `${forecast.forecastday[2].hour[timeOvermorrow].wind_kph} kph` }</Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>{forecast.forecastday[2].hour[timeOvermorrow].wind_dir}</Typography>
            <Typography className={`${classes.mdText} ${classes.lowerComponents}`} variant='body1'>{forecast.forecastday[2].hour[timeOvermorrow].uv}</Typography>
          </Grid>

        </Grid>
        
      <Grid item xs={6} md={2} className={classes.currentTemperature}>
        <Grid item xs={1} sm={3} style={{ minWidth: '50px' }}>
          <Typography className={classes.weatherDist} variant='body1'><FaThermometerThreeQuarters className={classes.icons}/></Typography>
        </Grid>
        <Grid item xs={11} sm={9} className={classes.currentTempText}>
          <Typography variant='body1' style={{ fontSize: '1.4rem', marginTop: '30px' }}>{
          units ? 
          <><span className={classes.xlText}>{forecast.forecastday[2].hour[timeOvermorrow].temp_f}</span> F{'\u00b0'}</>
          : 
          <><span className={classes.xlText}>{forecast.forecastday[2].hour[timeOvermorrow].temp_c}</span> C{'\u00b0'}</> 
        }</Typography>
        <Typography className={classes.smText} variant='body1'>Feels like {
          units ? 
          <><span>{forecast.forecastday[2].hour[timeOvermorrow].feelslike_f}</span> F{'\u00b0'}</>
          : 
          <><span>{forecast.forecastday[2].hour[timeOvermorrow].feelslike_c}</span> C{'\u00b0'}</> 
        }</Typography>
        
      <Typography className={`${classes.smText}`} variant='body1'>Pressure: {units ? `${forecast.forecastday[2].hour[timeOvermorrow].pressure_in} psi`
          : 
          `${forecast.forecastday[2].hour[timeOvermorrow].pressure_mb} mb` }</Typography>
        </Grid>
      </Grid>

    
    </Grid>

</TabPanel>
    </div>
  )
}

Weather.propTypes = {
  weatherData: PropTypes.object,
};

export default Weather
