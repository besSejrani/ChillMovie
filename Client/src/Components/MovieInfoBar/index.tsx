import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

import { calcTime, convertMoney } from "../../helper/helpers";

const MovieInfoBar: React.FC<any> = ({ time, budget, revenue }) => {
  const classes = useStyles();

  return (
    <div className={classes.infoBar}>
      <div className={classes.infoBarContent}>
        <div className={classes.infoBarContentColumn}>
          <span className={classes.infoBarInfo}>Running time: {calcTime(time)}</span>
        </div>

        <div className={classes.infoBarContentColumn}>
          <span className={classes.infoBarInfo}>Budget: {convertMoney(budget)}</span>
        </div>

        <div className={classes.infoBarContentColumn}>
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
      height: "105px",
      background: "#1c1c1c",
      position: "relative",
      padding: "25px 20px 0px 20px",
      boxSizing: "border-box",
      fontFamily: "Abel, sans-serif",
      fontSize: "22px",
    },
    infoBarContent: {
      maxWidth: "1280px",
      width: "100%",
      margin: "0 auto",
      color: "#fff",
    },
    infoBarContentColumn: {
      float: "left",
      width: "33.33%",
      boxSizing: "border-box",
      padding: "10px 20px 0 0",
    },
    infoBarInfo: {
      padding: "5px 0 0 10px",
      float: "left",
    },
  })
);

/* .rmdb-movieinfobar-content-col {

.fa-time, .fa-revenue {
  float: left;
  margin-top: -4px;

}

.fa-budget {
  float: left;
  margin-top: -3px; */
/* } */
