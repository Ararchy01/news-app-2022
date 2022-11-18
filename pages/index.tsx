import Main from "./components/main";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Article from "./components/article";
import Nav from "./components/nav";
import { GetStaticProps } from "next";
import Weather from "./components/weather";
import Contents from "./components/contents";

export default function Home(props) {
  return (
    <Main>
      <Head>
        <title>News App 2022</title>
        <meta name="description" content="Daichi Araki Portfolio 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contents
        title="Top News"
        articles={props.articles}
        weather={props.weather}
      />
      {/* <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main}>
          <Article title="Top News" articles={props.articles} />
        </div>
        <div className={styles.aside}>
          <Weather weatherData={props.weather} />
        </div>
      </div> */}
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // News
  try {
    const newsData = await fetch("https://ararchy0621.npkn.net/news", {
      headers: {
        "napkin-account-api-key": process.env.API_KEY,
      },
    });
    const newsJson = await newsData.json();
    const articles = newsJson?.articles;

    const weatherData = await fetch("https://ararchy0621.npkn.net/weather", {
      headers: {
        "napkin-account-api-key": process.env.API_KEY,
      },
    });
    const weather = await weatherData.json();

    return {
      props: {
        articles,
        weather,
      },
      revalidate: 60 * 10,
    };
  } catch (error) {
    console.log(error.message);
  }

  // Weather
};
