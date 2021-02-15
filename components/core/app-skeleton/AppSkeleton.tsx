import Spinner from "components/ui/spinner";
import React from "react";
import styles from "./AppSkeleton.module.css";

const AppSkeleton = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <p className={styles.headerTitle}> JobTrack</p>
        </nav>
      </header>
      <div className={`container ${styles.main}`}>
        <Spinner size={40} />
      </div>
    </div>
  );
};

export default AppSkeleton;
