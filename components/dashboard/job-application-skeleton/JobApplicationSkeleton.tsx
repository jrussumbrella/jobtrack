import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./JobApplicationSkeleton.module.css";

const JobApplicationSkeleton = () => {
  const skeletons = Array(9).fill(0);

  return (
    <div className={styles.jobApplicationContainer}>
      <Skeleton width={100} height={30} className={styles.header} />
      {skeletons.map((_, index) => (
        <div className={styles.listContainer} key={index}>
          <Skeleton className={styles.list} width={200} />
          <Skeleton className={styles.list} width={300} />
          <Skeleton className={styles.list} width={300} />
        </div>
      ))}
    </div>
  );
};

export default JobApplicationSkeleton;
