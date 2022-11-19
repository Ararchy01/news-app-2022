import Main from "./components/main";
import Head from "next/head";
import { GetStaticProps } from "next";
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
