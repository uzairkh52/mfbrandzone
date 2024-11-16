import { Button, Container } from "semantic-ui-react";
import Image from "next/image";
import styles from "../sass/Layout/Header.module.scss";

import Script from 'next/script'
import Head from 'next/head';

const Header = () => {
  
  return (
    <>
<Head>
<meta name="google-site-verification" content="l556Qqvxm0WIu4TDeOY0EMYPtEAd6zYR0nS9JBMNWoo" />
  {/* <!-- Google tag (gtag.js) --> */}

<script async src="https://www.googletagmanager.com/gtag/js?id=G-2RCR6WE1BW"></script>
<script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2RCR6WE1BW');`}
</script>

  {/* google tag manager */}
  {/* <!-- Google Tag Manager --> */}
  <Script>
  {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-2RCR6WE1BW');`}</Script>
  {/* <!-- End Google Tag Manager --> */}
</Head>
{/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-2RCR6WE1BW"
height="0" width="0" className={styles.dNone + styles.hidden}></iframe></noscript>

{/* <!-- End Google Tag Manager (noscript) --> */}

      {/* <Image src="../public/images/favicon.svg" alt="Vercel Logo" /> */}
    </>
  );
};

export default Header;
