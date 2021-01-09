import React from "react";
import { calcTime, convertMoney } from "../../utils/helpers";

import { createStyles, makeStyles, Theme, Icon } from "@material-ui/core";

import Time from "@material-ui/icons/AccessTime";
import Money from "@material-ui/icons/AttachMoney";
import Offer from "@material-ui/icons/LocalOffer";

const MovieInfoBar: React.FC<any> = ({ time, budget, revenue }) => {
  const classes = useStyles();

  return (
    <div className={classes.infoBar}>
      <div className={classes.infoBarContent}>
        <div className={classes.infoBarContentColumn}>
          <Icon>
            <Time />
          </Icon>
          <span className={classes.infoBarInfo}>Running time: {calcTime(time)}</span>
        </div>

        <div className={classes.infoBarContentColumn}>
          <Icon>
            <Money />
          </Icon>
          <span className={classes.infoBarInfo}>Budget: {convertMoney(budget)}</span>
        </div>

        <div className={classes.infoBarContentColumn}>
          <Icon>
            <Offer />
          </Icon>
          <span className={classes.infoBarInfo}>Revenue: {convertMoney(revenue)}</span>
        </div>
      </div>
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

      boxSizing: "border-box",
      fontFamily: "Abel, sans-serif",
      fontSize: "20px",
    },
    infoBarContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      maxWidth: "1280px",
      width: "100%",

      margin: "0 auto",
      color: "#fff",
    },
    infoBarContentColumn: {
      display: "flex",
      alignItems: "center",

      boxSizing: "border-box",
    },
    infoBarInfo: {
      padding: "0px 0px 0px 10px",
    },
  })
);
