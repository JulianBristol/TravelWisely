import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
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
      height: "2px"
    },
    background: '#8694e6',
    borderRadius: '12px 12px 0px 0px',
    opacity: 1,
    '&.MuiTab-textColorInherit.Mui-selected':{
      background: '#515a8e',
      color: '#fff',
    },
  }
  
}
));
