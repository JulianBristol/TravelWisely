import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  formControl: {
    margin: '10px !important',
  },
  selectEmpty: {
    marginTop: '10px',
  },
  loading: {
    height: "600px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "5px 15px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "70vh",
    overflow: "auto",
    backgroundColor: "#eee",
    marginTop: "20px !important",
  },
}));
