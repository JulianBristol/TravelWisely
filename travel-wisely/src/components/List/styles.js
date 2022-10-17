import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: "600px",
    diplay: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "70vh",
    overflow: "auto",
    backgroundColor: "#eee",
    marginTop: "20px"
  },
}));
