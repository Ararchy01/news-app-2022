import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Article from "./components/article";
import Header from "./components/header";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App 2022</title>
        <meta name="description" content="Daichi Araki Portfolio 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.main}>
        <Article title="headlines" articles={props.topArticles} />
      </div>
      <footer className={styles.footer}>
        <a href="https://github.com/Ararchy01" target="_blank">
          <p>Footer</p>
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const pageSize = 10;
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=ca&pageSize=${pageSize}&apiKey=f941d1c7cef6412e9a3c8d39f6aa3688`
  );
  const topJson = await topRes.json();
  const topArticles = topJson?.articles;

  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 10,
  };
};
