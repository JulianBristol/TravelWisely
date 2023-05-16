import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  title: {
    diplay: "none",
    '@media (max-width: 650px)': {
      display: "block",
    },
  },
  home: {
    diplay: "none",
    '@media (max-width: 650px)': {
      display: "block",
    },
    "&:hover": { color: "lightblue", cursor: "pointer" },
  },
  search: {
    position: "relative",
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    "&:hover": {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    marginRight: '60px',
    marginLeft: 0,
    width: "100%",
    height: "40px",
    '@media (max-width: 650px)': {
      marginLeft: '60px',
      width: "auto",
      height: "35px",
    },
  },
  searchIcon: {
    padding: '0px 15px',
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: { color: "white !important" },
  inputInput: {
    padding: '10px 15px 15px 0px !important',
    paddingLeft: `calc(1em + 40px) !important`,
    /* transition: theme.transitions.create("width"), */
    width: "100%",
    '@media (max-width: 960px)': { width: "20ch" },
  },
  toolbar: { display: "flex", justifyContent: "space-between", background: '#3f51b5' },
}));
