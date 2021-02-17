import Layout from "components/core/layout";
import React from "react";
import withAuth from "lib/withAuth";
import { useAuth } from "contexts/auth/AuthContext";
import styles from "styles/Account.module.css";
import Avatar from "components/ui/avatar";
import Button from "components/ui/button";
import Subscription from "components/account/subscription";

const Account = () => {
  const { currentUser, logout } = useAuth();

  return (
    <Layout title="Account">
      <div className="container">
        {currentUser && (
          <div className={styles.accountContainer}>
            <div className={styles.accountDetailsContainer}>
              <Avatar
                src={currentUser.photo_url as string}
                alt={currentUser.name}
                size={100}
              />
              <div className={styles.accountInfo}>
                <h2 className={styles.name}>{currentUser.name}</h2>
                <p className={styles.email}>{currentUser.email}</p>
              </div>
            </div>
            <div className={styles.accountMainContainer}>
              <Subscription />
            </div>
            <div className={styles.logOutContainer}>
              <Button onClick={logout} variant="danger">
                Log Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Account);
