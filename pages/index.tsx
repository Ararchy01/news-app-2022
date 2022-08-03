import Main from "./components/main";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Article from "./components/article";
import Nav from "./components/nav";

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
          <Article title="headlines" articles={props.topArticles} />
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
