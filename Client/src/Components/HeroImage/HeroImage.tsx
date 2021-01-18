import React from "react";
import { makeStyles, createStyles, Theme, Typography, Container } from "@material-ui/core";

const HeroImage = ({ image, text, title }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.hero}
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
      39%, rgba(0,0,0,0)
      41%, rgba(0,0,0,0.65)
      100%),
      url('${image}'), #1c1c1c`,
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <div className={classes.heroImageText}>
          <Typography variant="h1" className={classes.h1}>
            {title}
          </Typography>

          <Typography variant="body1" className={classes.p}>
            {text}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default HeroImage;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      backgroundSize: "100%, cover !important",
      backgroundPosition: "center, center !important",
      width: "100%",
      height: "calc(100vh - 60px)",
      position: "relative",
      animation: "animateHeroimage 1s",
    },
    heroImageText: {
      zIndex: 100,
      maxWidth: "700px",
      position: "absolute",
      bottom: "40px",
      marginRight: "20px",
      minHeight: "100px",
      background: "rgba(0, 0, 0, 0)",
      color: "#fff",
    },
    h1: {
      fontFamily: "Abel, sans-serif",
      fontSize: "48px",
      color: "#fff",
    },
    p: {
      fontFamily: "Abel, sans-serif",
      fontSize: "18px",
      lineHeight: "26px",
      color: "#fff",
    },
  })
);
