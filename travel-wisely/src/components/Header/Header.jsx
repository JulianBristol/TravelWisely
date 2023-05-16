//Turn the travel wisely into a link
//Change the travel wisely font, color, and mouse cursor
import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material/";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useStyles } from "./styles";

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
          <Autocomplete onLoad={onload} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <RxMagnifyingGlass style={{ fontSize: '1.4rem' }}/>
            </div>
            <InputBase
              placeholder="Explore more places..."
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
