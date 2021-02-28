import Layout from "components/core/layout";
import React from "react";
import withAuth from "lib/withAuth";
import { useAuth } from "contexts/auth/AuthContext";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Subscription from "components/account/subscription";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Settings from "components/account/settings";

const useStyles = makeStyles((theme) => ({
  accountContainer: {
    margin: "30px 0",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  accountDetailsContainer: {
    padding: "10px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px",
  },
  accountInfo: {
    padding: 10,
  },
  accountMainContainer: {
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logOutContainer: {
    textAlign: "center",
    marginTop: 100,
    width: "100%",
  },
}));

const Account = () => {
  const classes = useStyles();
  const { currentUser, logout } = useAuth();

  return (
    <Layout title="Account">
      <Container>
        {currentUser ? (
          <div className={classes.accountContainer}>
            <div className={classes.accountDetailsContainer}>
              <Avatar
                src={currentUser.photo_url as string}
                alt={currentUser.name}
                className={classes.avatar}
              />

              <div className={classes.accountInfo}>
                <Typography>{currentUser.name}</Typography>
                <Typography>{currentUser.email}</Typography>
              </div>
            </div>
            <div className={classes.accountMainContainer}>
              <Settings />
              <Subscription />
            </div>
            <div className={classes.logOutContainer}>
              <Button onClick={logout} variant="text" color="secondary">
                Log Out
              </Button>
            </div>
          </div>
        ) : (
          ""
        )}
      </Container>
    </Layout>
  );
};

export default withAuth(Account);
