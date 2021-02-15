import Button from "components/ui/button";
import Card from "components/ui/card";
import React from "react";
import styles from "./Subscription.module.css";

const Subscription = () => {
  return (
    <Card>
      <h2> Subscription </h2>
      <h3 className={styles.subscriptionType}> FREE </h3>
      <p> Manage up to 50 job applications. </p>
      <Button>Upgrade Subscription</Button>
    </Card>
  );
};

export default Subscription;
