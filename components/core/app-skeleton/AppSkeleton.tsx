import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.background.default,
    color:
      theme.palette.type === "light"
        ? theme.palette.primary.dark
        : theme.palette.primary.light,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  headerLogoContainer: {
    display: "flex",
    alignItems: "center",
  },
  headerLogo: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },
  main: {
    width: "100%",
    height: "calc(100vh - 70px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const AppSkeleton = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerLogoContainer}>
            <img
              src="/images/logo.svg"
              className={classes.headerLogo}
              alt="job track logo"
            />
            <Typography variant="h6">JobTrack</Typography>
          </div>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        <CircularProgress />
      </main>
    </div>
  );
};

export default AppSkeleton;
