import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Button, Paper, Typography, useMediaQuery } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import useStyles from "./styles";
import mapStyles from "./mapStyles";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [toggleMap, setToggleMap] = useState(false);
  
  return (
    <div className={classes.mapContainer}>
      {/* Toggle Google Maps style Button */}
      <div className={classes.mapButtonContainer}>
          <Button
            className={classes.mapButton}
            variant="contained"
            onClick={() => setToggleMap(!toggleMap)}
          >
            Toggle Map Styles
          </Button>
        </div>
        {/* Display google map section */}
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: toggleMap ? mapStyles: "",
        }}
        /* Update code to display new coords */
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        /* Get information about the selected element and connect it to the element in the list */
        onChildClick={(child) => setChildClicked(child)}
      >
        {/* Apply each location to the map */}
        {places?.map((place, i) =>
            <div
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!isDesktop ? (
                <LocationOnOutlinedIcon color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    className={classes.typography}
                    variant="subtitle2"
                    gutterBottom
                  >
                    {place.name}
                  </Typography>
                  <img
                    className={classes.pointer}
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={places.name}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
            </div>
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
