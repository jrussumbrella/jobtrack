import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Button from "components/ui/button";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.headerTitle}> JobTrack</a>
        </Link>
        <div className={styles.headerRight}>
          <Button href="/login">
            Log In
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
