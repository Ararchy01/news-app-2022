import Head from "next/head";
import { useRouter } from "next/router";
import Main from "../components/main";
import Contents from "../components/contents";

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
      <Contents
        title={props.title}
        articles={props.articles}
        weather={props.weather}
      />
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
  try {
    const newsData = await fetch(
      `https://ararchy0621.npkn.net/news?category=${params.category}`,
      {
        headers: { "napkin-account-api-key": process.env.API_KEY },
      }
    );
    const newsJson = await newsData.json();
    const articles = newsJson?.articles;

    const weatherData = await fetch("https://ararchy0621.npkn.net/weather", {
      headers: {
        "napkin-account-api-key": process.env.API_KEY,
      },
    });
    const weather = await weatherData.json();

    const title =
      params.category.charAt(0).toUpperCase() +
      params.category.slice(1).toLowerCase();

    return {
      props: { title, articles, weather },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error.message);
  }
}

export default Topic;
