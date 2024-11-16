import "@/styles/globals.css";
import "../styles/sass/application.scss";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
    useEffect(() => {
      ReactGA.initialize('Your-GA-Measurement-ID');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    
    return <>
    <GoogleAnalytics trackPageViews />
    <Component {...pageProps} />;

  </>
}
