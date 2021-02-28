import { useEffect } from "react";
import Head from "next/head";
import { AuthProvider } from "contexts/auth/AuthContext";
import { JobApplicationProvider } from "contexts/job-application/job-application-context";
import { ThemeProvider } from "contexts/theme/ThemeContext";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import CssBaseline from "@material-ui/core/CssBaseline";
import "styles/globalStyles.css";

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
      <ThemeProvider>
        <CssBaseline />
        <AuthProvider>
          <JobApplicationProvider>
            <Toaster />
            <Component {...pageProps} />
          </JobApplicationProvider>
        </AuthProvider>
      </ThemeProvider>
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
