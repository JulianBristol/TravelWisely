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
  contatiner: {
    paddign: "25px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  list: {
    height: "75vh",
    overflow: "auto",
  },
}));
