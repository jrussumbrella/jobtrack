import { useEffect } from "react";
import Head from "next/head";
import { AuthProvider } from "contexts/auth/AuthContext";
import { JobApplicationProvider } from "contexts/job-application/job-application-context";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core";
import "styles/globalStyles.css";
import { lightTheme } from "theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/logo.png" />
      </Head>
      <MaterialThemeProvider theme={lightTheme}>
        <CssBaseline />
        <AuthProvider>
          <JobApplicationProvider>
            <Toaster />
            <Component {...pageProps} />
          </JobApplicationProvider>
        </AuthProvider>
      </MaterialThemeProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
