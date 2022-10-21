import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  weatherContainer: {
    margin: "10px 0 0 0",
    height: "250px",
    backgroundColor: "#fff",
    padding: "10px",
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
  },
}));
