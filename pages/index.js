import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../component/header";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, ListItem, Typography } from "@mui/material";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Header />
      <Head>
        <title>Pakistan’s No.1 Smart Watch Brand
        – YOLO</title>
        <meta name="description" content="Explore our range of Yolo products, including the Yolo Smartwatch, Yolo Bluetooth Speaker, and Yolo Wireless Earbuds, designed to elevate your everyday ..." />
        
      </Head>
      <section className="section-padding-xl basecolor1-bg">
        <Container maxWidth="sm">
          <Grid>
            <Grid item xs={12}>
              <h1 className="uppercase align-center white mb-20">MFBRANDZONE authentic product</h1>
              <h2 className="align-center regular white  f18 mb-20">Best quality of earbuds smart watches headphones</h2>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="section-padding ">
        <Container maxWidth="lg">
        <Grid>
          <Grid item xs={12}>
            <h3 className="mb-40">New Arrivals</h3>
          </Grid>
        </Grid>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12, md: 4, lg:4 }}>
              <Card sx={{ maxWidth: 345 }}>
                <div className="">
                  <img
                    alt=""
                    src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/466394855_122094540950630648_4622278421472469748_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2BApIOHqIuUQ7kNvgGfSWmK&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=AM5rtBvRQXcFpqS3lWReduo&oh=00_AYC_EerBHxqDxTTms_HFUIGCdIaQRpugK5aptT59pXZL9A&oe=6746EAEE"
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Yolo Touchable Earbuds 
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Dual Mic Environmental Noise Cancellation
- <Link href={"https://www.facebook.com/profile.php?id=61568919442130"}> Enabled for voice assistance</Link>
- Hassle Free Auto Connectivity
- Comfortable In-Ear Fit
- Bluetooth Version: V5.3
- Speaker: 10mm
- Battery: 300mAh (Charging Box) 30mAh (Earbud)
- Charging Time: Earbud 1H
- Charging Box 1.5H
   for more details contact us
                  </Typography>
                </CardContent>
                <CardActions className=" flexbox jc-center " >
                  <Link
                  className={styles.enterbutton + " aa btn button ui btn-primary btn-md"}
                  href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"}
                >
                  Buy Now
                </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item size={{ xs: 12, md: 4, lg:4 }}>
              <Card sx={{ maxWidth: 345 }}>
                <div className="">
                  <img
                    alt=""
                    src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/466398966_122094547796630648_3536867660479380423_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RYws18qNtzkQ7kNvgE1pMt5&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AmW62sai7s7BvpciOFn5at4&oh=00_AYBOozPG7mIJ1xIpptuEsWvsvwiNBZf2b3ZQJSnQTfhB5A&oe=6746F135"
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Yolo Smart Digital Watch
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Built-in Speaker and Microphone
- 1.7” HD Display
- Live Watch Faces
- Multiple Sports Modes
- Heart Rate Sensor
- SpO2 and IP67 Water Resistant
- Smart Notifications and Much More
Choose your color : Midnight Black
for more details <Link href={"https://www.facebook.com/profile.php?id=61568919442130"}>contact us</Link>
                  </Typography>
                </CardContent>
                <CardActions className=" flexbox jc-center " >
                <Link
                  className={styles.enterbutton + " aa btn button ui btn-primary btn-md"}
                  href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"}
                >
                  Buy Now
                </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item size={{ xs: 12, md: 4, lg:4 }}>
              <Card sx={{ maxWidth: 345 }}>
                <div className="">
                  <img
                    alt=""
                    src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-6/467119422_122098823732630648_408771129900020227_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9Jc917zvWIMQ7kNvgEvJpMa&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=ADanm274gy4UkWJat05F2pR&oh=00_AYB8GWDqWUauThRHg5iWq6VUTebEqlICgz4Qm4nu9StwOw&oe=6746F4E9"
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Premium Bass headphones
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
Premium Bass headphones
500mAh Large battery
Up to 20 Hours of Music Playback time
Support SD Card
Wired and Wireless Connectivity
Type C Charging 3 hours to Full charge
On Device Controls
Bluetooth Calling
Foldable Design
Comfortable soft Earcups for all day Use
Available in Black, Silver, Gold Color
   for more information contact us 
                  </Typography>
                </CardContent>
                <CardActions className=" flexbox jc-center " >
                <Link
                  className={styles.enterbutton + " aa btn button ui btn-primary btn-md"}
                  href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"}
                >
                  Buy Now
                </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          
        </Container>
      </section>
      <hr />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable} + " aaaa`}
      >
        <main className={styles.main}>
          <img style={{ width: 400 }} src="/images/logo.jpg" />
          <h1>Contact us for more information</h1>

          <div className={styles.ctas}>
            <div
              className="d-flex justify-content-center-center align-items-center"
              style={{ flexDirection: "column" }}
            >
              <h4 className="align-center">Explore more</h4>
              <p style={{ textAlign: "center", fontSize: 14 }}>
                please visit our facebook page for more detail if you want to
                purchase anything just message our inbox on whatsapp chat or
                call. we will response quick
              </p>
              <Link
                className={styles.enterbutton + " aa btn button ui btn-primary"}
                href={"/about"}
              >
                About us
              </Link>
            </div>

            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                listStyle: "none",
                gap: 40,
                marginTop: 50,
              }}
            >
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61568919442130"
                >
                  {" "}
                  <img style={{ width: 50 }} src="/images/fb.svg" />
                </a>
              </li>
              <li>
                <img style={{ width: 50 }} src="/images/insta.svg" />
              </li>
              <li>
                <a href="https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130">
                  <img style={{ width: 50 }} src="/images/whatsapp.svg" />
                </a>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
