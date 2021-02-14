import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Button from "components/ui/button";
import { useAuth } from "contexts/auth/AuthContext";
import Avatar from "components/ui/avatar";

const Header = () => {
  const { currentUser } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.headerTitle}> JobTrack</a>
        </Link>
        <ul className={styles.headerRight}>
          {currentUser ? (
            <>
              <li className={styles.headerList}>
                <Link href="/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li className={styles.headerList}>
                <Link href="/account">
                  <a>
                    <Avatar
                      src={currentUser.photo_url as string}
                      alt={currentUser.name}
                    />
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <Button href="/login">Log In</Button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
