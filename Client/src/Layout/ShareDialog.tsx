import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { openShareDialog } from "../../src/redux/ui/uiAction";
import { IAppState } from "../redux/rootReducer";

const ShareDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const dialogSelection = useSelector((state: IAppState) => state.ui.isShareDialogOpen);
  const movieSelection = useSelector((state: IAppState) => state.ui.shareMovie);

  const movieId = Object.values(movieSelection)[0];
  const movieName = Object.values(movieSelection)[1];

  return (
    <>
      <Dialog
        fullWidth
        onClose={() => dispatch(openShareDialog())}
        aria-labelledby="simple-dialog-title"
        open={dialogSelection}
      >
        <DialogTitle id="simple-dialog-title">Share {movieName}</DialogTitle>

        <DialogContent className={classes.content} dividers>
          <Button
            variant="contained"
            color="primary"
            className={classes.social}
            style={{ backgroundColor: "#25d366" }}
            startIcon={<WhatsAppIcon />}
            target="_blank"
            href={`https://wa.me/?text=${movieName} https://chillmovie.netlify.app/${movieId}`}
          >
            WhatsApp
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.social}
            style={{ backgroundColor: "#3b5998" }}
            startIcon={<FacebookIcon />}
            target="_blank"
            href={`https://www.facebook.com/sharer.php?u=https://chillmovie.netlify.app/${movieId}`}
          >
            Facebook
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.social}
            style={{ backgroundColor: "#1da1f2" }}
            startIcon={<TwitterIcon />}
            target="_blank"
            href={`https://twitter.com/share?url=https://chillmovie.netlify.app/${movieId}&text=${movieName}`}
          >
            Twitter
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShareDialog;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    content: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 100,
      [theme.breakpoints.down("xs")]: {
        height: 125,
        flexWrap: "wrap",
      },
    },

    social: {
      height: 40,
      [theme.breakpoints.down("xs")]: {
        margin: "10px 0px",
      },
    },
  })
);
