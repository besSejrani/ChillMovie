import React from "react";

import { createStyles, makeStyles, Theme, Icon, Container, Typography } from "@material-ui/core";

import { calcTime, convertMoney } from "../../utils/helpers";
import Time from "@material-ui/icons/AccessTime";
import Money from "@material-ui/icons/AttachMoney";
import Offer from "@material-ui/icons/LocalOffer";

const MovieInfoBar: React.FC<any> = ({ time, budget, revenue }) => {
  const classes = useStyles();

  return (
    <div className={classes.infoBar}>
      <Container className={classes.infoBarContent}>
        <div className={classes.infoBarContentColumn}>
          <Icon>
            <Time />
          </Icon>
          <Typography variant="body1" className={classes.infoBarInfo}>
            Running time: {calcTime(time)}
          </Typography>
        </div>

        <div className={classes.infoBarContentColumn}>
          <Icon>
            <Money />
          </Icon>
          <Typography variant="body1" className={classes.infoBarInfo}>
            Budget: {convertMoney(budget)}
          </Typography>
        </div>

        <div className={classes.infoBarContentColumn}>
          <Icon>
            <Offer />
          </Icon>
          <Typography variant="body1" className={classes.infoBarInfo}>
            Revenue: {convertMoney(revenue)}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default MovieInfoBar;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoBar: {
      width: "100%",
      height: "80px",
      background: "#1c1c1c",
      position: "relative",

      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      [theme.breakpoints.down("sm")]: {
        height: "130px",
      },
    },
    infoBarContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#fff",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "flex-start",
        height: "100%",
        padding: "20px 20px",
      },
    },
    infoBarContentColumn: {
      display: "flex",
      alignItems: "center",
    },
    infoBarInfo: {
      padding: "0px 0px 0px 10px",
    },
  })
);
