import Image from "next/image";
import Script from 'next/script'
import Head from 'next/head';
import styles from "../styles/sass/components/Header.module.scss"
import { Container, Grid } from "@mui/material";

const Header = () => {
  
  return (
    <>
<Head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/favicon.ico" />
{/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JSWTFCCN6J"></script>
<script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JSWTFCCN6J');`}
</script>

</Head>
{/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-JSWTFCCN6J"
height="0" width="0" className={styles.dNone + styles.hidden}></iframe></noscript>

<section className="white-bg">
        <Container maxWidth="sm">
          <Grid>
            <Grid item xs={12}>
            <div className="d-flex justify-content-center align-items-center">
              <img style={{ width: 150 }} src="/images/logo.jpg" />
            </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Header;
