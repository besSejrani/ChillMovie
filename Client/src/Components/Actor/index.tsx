import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { IMAGE_BASE_URL } from "../../config";

const Actor: React.FC<any> = ({ actor }) => {
  const POSTER_SIZE = "w154";
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : "https://via.placeholder.com/150"
        }
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent>
          <Typography component="h6" variant="h6">
            {actor.name}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            {actor.character}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default Actor;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "none",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        flexDirection: "column",
      },
    },
    details: {
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        flexDirection: "column",
      },
    },
    cover: {
      // width: "200px",
      height: "200px",
      display: "flex",
      flexDirection: "column",
    },
  })
);
