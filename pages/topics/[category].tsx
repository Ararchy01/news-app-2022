import Head from "next/head";
import { useRouter } from "next/router";
import Article from "../components/article";
import Nav from "../components/nav";
import Main from "../components/main";
import styles from "../../styles/Home.module.scss";

function Topic(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <Head>
        <title>NewsApp - {props.title}</title>
      </Head>
      <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main} style={{ marginRight: "10%" }}>
          <Article title={props.title} articles={props.articles} />
        </div>
      </div>
    </Main>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const newsData = await fetch(
    `https://ararchy0621.npkn.net/news?category=${params.category}`,
    {
      headers: { "napkin-account-api-key": process.env.API_KEY },
    }
  );
  const newsJson = await newsData.json();
  const articles = newsJson?.articles;

  const title =
    params.category.charAt(0).toUpperCase() +
    params.category.slice(1).toLowerCase();

  return {
    props: { articles, title },
    revalidate: 60 * 10,
  };
}

export default Topic;
