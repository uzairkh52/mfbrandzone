import Image from "next/image";
import Script from 'next/script'
import Head from 'next/head';
import styles from "@/styles/sass/components/Header.module.scss"

const Header = () => {
  
  return (
    <>
<Head>
<meta name="google-site-verification" content="l556Qqvxm0WIu4TDeOY0EMYPtEAd6zYR0nS9JBMNWoo" />
  {/* <!-- Google tag (gtag.js) --> */}

  {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WJEKHDZLXH"></script>
<script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WJEKHDZLXH');`}
</script>

</Head>
{/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-2RCR6WE1BW"
height="0" width="0" className={styles.dNone + styles.hidden}></iframe></noscript>

    </>
  );
};

export default Header;
