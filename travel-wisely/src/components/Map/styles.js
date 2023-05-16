import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px",
    display: "flex",
    width: "100px",
    flexDirection: "column",
    justifyContent: "center",
  },
  mapContainer: {
    height: "45vh",
    width: "100%",
    position: "relative",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
  },
  mapButtonContainer: {
    position: "absolute",
    bottom: "25px",
    left: "25px",
    zIndex: 1,
  },
  mapButton: {
    backgroundColor: "white !important",
    color: "#555555 !important",
    "&:hover": {
      color: "#000000 !important",
      backgroundColor: "#e2e1e0 !important",
    },
  },
}));
