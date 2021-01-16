import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { IMAGE_BASE_URL } from "../../config";

const Actor: React.FC<any> = ({ actor }) => {
  const POSTER_SIZE = "w154";
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardMedia
        className={classes.cover}
        image={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : "https://via.placeholder.com/275x425"
        }
        title="Live from space album cover"
      />

      <CardContent>
        <Typography component="h6" variant="h6" style={{ fontSize: "1rem" }}>
          {actor.name}
        </Typography>

        <Typography variant="subtitle1" color="textSecondary" style={{ fontSize: "0.8rem" }}>
          {actor.character}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Actor;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginRight: "32px",
      marginBottom: "32px",
    },
    cover: {
      width: "auto",
      minWidth: "275px",
      maxWidth: "275px",
      background: "cover/center no-repeat",
      height: "425px",
      display: "flex",
      flexWrap: "wrap",
    },
  })
);
