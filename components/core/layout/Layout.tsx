import React, { ReactNode } from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../header";
import Footer from "../footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "calc(90vh)",
  },
}));

const Layout = ({ children, title = "JobTrack" }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
