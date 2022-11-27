import Head from "next/head";
import { useRouter } from "next/router";
import Main from "../components/main";
import Contents from "../components/contents";
import { getNews, getWeather } from "../functions/api";

function Topic(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <Head>
        <title>NewsApp - {props.category}</title>
      </Head>
      <Contents
        category={props.category}
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
  const articles = await getNews(`?category=${params.category}`);
  const weather = await getWeather();
  const category =
    params.category.charAt(0).toUpperCase() +
    params.category.slice(1).toLowerCase();

  return {
    props: { category, articles, weather },
    revalidate: 60,
  };
}

export default Topic;
