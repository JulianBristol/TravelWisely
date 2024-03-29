import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import {MdLocationPin} from "react-icons/md";
import {AiFillPhone} from "react-icons/ai";
import useStyles from "./styles";
const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: "350px" }}
        title={place.name}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <MdLocationPin /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <AiFillPhone /> {place.phone}
          </Typography>
        )}
        <CardActions>
          {place.web_url ? (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, "_blank")}
              variant="contained"
            >
              Trip Advisor
            </Button>
          ) : (
            ""
          )}

          {/* Display a button if the location has a website */}
          {place.website ? (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, "_blank")}
              variant="contained"
            >
              Website
            </Button>
          ) : (
            ""
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
