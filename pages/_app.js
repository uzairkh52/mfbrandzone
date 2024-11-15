import "@/styles/globals.css";
import "../styles/sass/application.scss";

import TagManager from 'react-gtm-module';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-2RCR6WE1BW' });
  }, []);
  return <Component {...pageProps} />;
}
