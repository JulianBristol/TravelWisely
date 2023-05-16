import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  unitsContainer: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 650px)': {
      flexDirection: "column",
    },
  },
  tabsContainer: {
    borderBottom: "2px solid #33333388",
    marginLeft: "25px",
    display: "flex",
    alignItems: "end",
    '@media (max-width: 600px)': {
      marginLeft: "0px",
    }
  },
  weatherContainer: {
    margin: "10px 0 0 0",
    backgroundColor: "#fff",
    padding: "10px 10px 0px",
  },
  locationName: {
    fontSize: "20px",
    textAlign: "center",
    padding: "10px",
  },
  tabStyles: {
    indicator: {
      display: "block",
      color: "blue",
      height: "2px",
    },
    background: '#8694e6',
    border: '2px solid #000',
    borderBottom: '2px solid transparent',
    borderRadius: '12px 12px 0px 0px',
    opacity: 1,
    fontSize: '1rem',
    minWidth: '120px',
    '&.MuiTab-textColorInherit.Mui-selected':{
      background: '#515a8e',
      color: '#fff',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem',
      border: '1px solid #000',
      borderBottom: '1px solid transparent',
      borderRadius: '10px 10px 0px 0px',
      opacity: 1,
      minWidth: '80px',
    },
  },
  currentConditions: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'space-between',
    marginBottom: '20px',
    minWidth: '400px',
    '@media (max-width: 460px)': {
      marginLeft: '0px',
      minWidth: '100%',
    }
  },
  currentConditions_text: { 
    marginLeft: '20px',
    '@media (max-width: 460px)': {
      marginLeft: '10px',
    }
},
  currentWindUV: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '20px',
    marginRight: '0px',
    minWidth: '250px',
    '@media (max-width: 960px)': {
      marginLeft: '0px',
      minWidth: '0px',
    },
    '@media (max-width: 460px)': {
      marginLeft: '0px',
      minWidth: '100%',
      maxWidth: '85px',
    }
  },
  currentWindUV_left: { 
    display: 'flex',
    alignItems: 'end',
    flexDirection: 'column',
    maxWidth: '85px',
  },
  currentTemperature: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '30px',
    minWidth: '160px',
    '@media (max-width: 960px)': {
      marginLeft: '0px',
    },
    '@media (max-width: 460px)': {
      marginLeft: '0px',
      minWidth: '100%',
    }
  },
  weatherIconContainerA: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 460px)': {
      display: 'none'
    }
},
  weatherIconContainerB: {
    display: 'none',
    '@media (max-width: 460px)': {
      display: 'block'
    }
},
  weatherIcon: {
    height: '200px',
    '@media (max-width: 600px)': {
      height: '100px'
    }
  },
  icons: {
    fontSize: '5.4rem',
    '@media (max-width: 600px)': {
      fontSize: '3.4rem',
    },
  },
  weatherDist: { 
    marginLeft: '-20px',
    minWidth: '90px',
    '@media (max-width: 960px)': {
      marginLeft: '0px',
    },
  },
  currentTempText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    minWidth: '140px',
    '@media (max-width: 959.9px)': {
      maxWidth: '140px',
      minWidth: '140px',
    },
    '@media (max-width: 600px)': {
      maxWidth: '130px',
      minWidth: '0px',
    },
  },
  xlText: {
    fontSize: '3.5rem',
    '@media (max-width: 600px)': {
      fontSize: '3rem',
    },
  },
  lgText: {
    fontSize: '3rem',
    '@media (max-width: 600px)': {
      fontSize: '2rem',
    }
  },
  mdText: {
    fontSize: '1.3rem',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    }
  },
  smText: {
    fontSize: '0.8rem',
  },
  lowerComponents:{
    marginTop: '30px',
    '@media (max-width: 600px)': {
      marginTop: '15px',
    }
  }
}
));
