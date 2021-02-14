import React from "react";
import Layout from "components/core/layout";
import Button from "components/ui/button";
import Image from "next/image";
import styles from "styles/Login.module.css";
import GoogleIcon from "components/icons/Google";
import GithubIcon from "components/icons/Github";
import { useAuth } from "contexts/auth/AuthContext";

const Login = () => {
  const { socialLogin } = useAuth();

  return (
    <Layout title="Login">
      <div className="container">
        <div className={styles.loginContainer}>
          <div className={styles.loginCreds}>
            <h2> Log In With </h2>
            <div className={styles.buttonsContainer}>
              <Button
                className={`${styles.button} ${styles.btnGoogle}`}
                fullWidth
                icon={<GoogleIcon />}
                onClick={() => socialLogin("google")}
              >
                Google
              </Button>
              <Button
                className={`${styles.button} ${styles.btnGithub}`}
                fullWidth
                icon={<GithubIcon />}
              >
                Github
              </Button>
            </div>
          </div>
          <div className={styles.illustration}>
            <Image src="/images/sign_in.svg" width="500" height="500" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
