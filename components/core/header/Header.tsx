import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "contexts/auth/AuthContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

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
  navRight: {
    display: "flex",
    alignItems: "center",
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
  headerList: {
    paddingRight: "20px",
  },
}));

const Header = () => {
  const { currentUser } = useAuth();

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <a className={classes.headerLogoContainer}>
            <img
              src="/images/logo.svg"
              className={classes.headerLogo}
              alt="job track logo"
            />
            <Typography variant="h6">JobTrack</Typography>
          </a>
        </Link>
        <div className={classes.navRight}>
          {currentUser ? (
            <>
              <div className={classes.headerList}>
                <Link href="/dashboard">
                  <a>Dashboard</a>
                </Link>
              </div>
              <div>
                <Link href="/account">
                  <a>
                    <Avatar
                      alt={currentUser.name}
                      src={currentUser.photo_url as string}
                    />
                  </a>
                </Link>
              </div>
            </>
          ) : (
            <Link href="/login" passHref>
              <Button color="primary" variant="contained">
                Login
              </Button>
            </Link>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
