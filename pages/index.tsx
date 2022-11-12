import Main from "./components/main";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Article from "./components/article";
import Nav from "./components/nav";
import { GetStaticProps } from "next";
import Weather from "./components/weather";

export default function Home(props) {
  return (
    <Main>
      <Head>
        <title>News App 2022</title>
        <meta name="description" content="Daichi Araki Portfolio 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main}>
          <Article title="headlines" articles={props.articles} />
        </div>
        <div className={styles.aside}>
          <Weather weatherData={props.weather} />
        </div>
      </div>
      <footer className={styles.footer}>
        <a href="https://github.com/Ararchy01" target="_blank">
          <p>Footer</p>
        </a>
      </footer>
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // News
  const newsData = await fetch("http://localhost/news");
  const newsJson = await newsData.json();
  const articles = newsJson?.articles;

  // Weather
  const weatherData = await fetch(`http://localhost/weather`);
  const weather = await weatherData.json();

  return {
    props: {
      articles,
      weather,
    },
    revalidate: 60 * 10,
  };
};
