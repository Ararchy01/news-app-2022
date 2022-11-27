import Main from "./components/main";
import Head from "next/head";
import { GetStaticProps } from "next";
import Contents from "./components/contents";
import { getNews, getWeather } from "../functions/api";

export default function Home(props) {
  return (
    <Main>
      <Head>
        <title>News App 2022</title>
        <meta name="description" content="Daichi Araki Portfolio 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contents
        category={props.category}
        articles={props.articles}
        weather={props.weather}
      />
    </Main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getNews("");
  const weather = await getWeather();
  const category = "Top News";
  return {
    props: { category, articles, weather },
    revalidate: 60,
  };
};
