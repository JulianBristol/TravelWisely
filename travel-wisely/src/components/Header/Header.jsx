//Turn the travel wisely into a link
//Change the travel wisely font, color, and mouse cursor
import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autoComplete, setAutoComplete] = useState(null);

  const onload = (auto) => setAutoComplete(auto);
  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng })
  }

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h5"
          className={classes.home}
        >
          Travel Wisely
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore more places
          </Typography>
          <Autocomplete onLoad={onload} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
