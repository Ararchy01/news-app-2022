import Article from "../article";
import Nav from "../nav";
import Weather from "../weather";
import styles from "../../../styles/Home.module.scss";

type Props = {
  title: string;
  articles: Object[];
  weather: Object[];
};

export default function Contents(props: Props) {
  const { title } = props;
  const { articles } = props;
  const { weather } = props;
  return (
    <div className={styles.contents}>
      <div className={styles.nav}>
        <nav>
          <Nav />
        </nav>
      </div>
      <div className={styles.blank} />
      <div className={styles.main}>
        <Article title={title} articles={articles} />
      </div>
      <div className={styles.aside}>
        <Weather weatherData={weather} />
      </div>
    </div>
  );
}
