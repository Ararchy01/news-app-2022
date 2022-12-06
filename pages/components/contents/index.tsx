import ArticlePage from "../article";
import Nav from "../nav";
import WeatherPage from "../weather";
import styles from "../../../styles/Home.module.scss";
import { Article, Weather } from "../../../types";

type Props = {
  category: string;
  articles: Article[];
  weather: Weather;
};

export default function Contents(props: Props) {
  const { category, articles, weather } = props;
  return (
    <div className={styles.contents}>
      <div className={styles.nav}>
        <nav>
          <Nav />
        </nav>
      </div>
      <div className={styles.blank} />
      <div className={styles.main}>
        <ArticlePage category={category} articles={articles} />
      </div>
      <div className={styles.aside}>
        <WeatherPage weatherData={weather} />
      </div>
    </div>
  );
}
