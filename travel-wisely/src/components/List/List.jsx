//Ensure that the rating system is working properly
//      --- Imports Begin ---
import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { useStyles } from "./styles";
//      --- Imports End ---

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels, & Attractions around you
      </Typography>
      
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select variant="standard" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Places</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select variant="standard" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All Ratings</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
          {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
            {places?.map((place, i) =>
            /* prevent ads from appearing on list */
              place.ad_size ? (
                ""
              ) : (
                <Grid ref={elRefs[i]} item key={i} xs={12}>
                  <PlaceDetails
                    place={place}
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                  />
                </Grid>
              )
            )}</>
      )}
          </Grid>
        
    </div>
  );
};

export default List;
