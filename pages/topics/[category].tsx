import Head from "next/head";
import { useRouter } from "next/router";
import Main from "../components/main";
import Contents from "../components/contents";
import { getNews, getWeather } from "../../functions/api";
import { MainProps } from "../../types";
import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";

const Topic: NextPage<MainProps> = (props: MainProps) => {
  const { articles, weather, category } = props;
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <Head>
        <title>NewsApp - {props.category}</title>
      </Head>
      <Contents category={category} articles={articles} weather={weather} />
    </Main>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const categoryString = params!.category!.toString();
  const articles = await getNews(`?category=${categoryString}`);
  const weather = await getWeather();
  const category =
    categoryString.charAt(0).toUpperCase() +
    categoryString.slice(1).toLowerCase();

  return {
    props: { category, articles, weather },
    revalidate: 60,
  };
};

export default Topic;
