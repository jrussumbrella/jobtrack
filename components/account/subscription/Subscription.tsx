import Button from "components/ui/button";
import Card from "components/ui/card";
import React from "react";
import toast from "react-hot-toast";
import styles from "./Subscription.module.css";

const Subscription = () => {
  const handleUpgradeSubscription = () => {
    toast.error(
      "We're currently working it right now. Please try again later."
    );
  };

  return (
    <Card>
      <h2> Subscription </h2>
      <h3 className={styles.subscriptionType}> FREE </h3>
      <p> Manage up to 50 job applications. </p>
      <Button onClick={handleUpgradeSubscription}>Upgrade Subscription</Button>
    </Card>
  );
};

export default Subscription;
