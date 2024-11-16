import "@/styles/globals.css";
import "../styles/sass/application.scss";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
    return <>
    <GoogleAnalytics trackPageViews />
    <Component {...pageProps} />;

  </>
}
