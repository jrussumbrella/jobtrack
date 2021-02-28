import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import toast from "react-hot-toast";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  subscriptionType: {},
  text: { marginBottom: 10 },
}));

const Subscription = () => {
  const classes = useStyles();

  const handleUpgradeSubscription = () => {
    toast.error(
      "We're currently working it right now. Please try again later."
    );
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className={classes.text}>
          Subscription
        </Typography>
        <Typography variant="h6" className={classes.text}>
          FREE
        </Typography>
        <Typography variant="body2" className={classes.text}>
          Manage up to 50 job applications.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpgradeSubscription}
        >
          Upgrade Subscription
        </Button>
      </CardContent>
    </Card>
  );
};

export default Subscription;
