import styles from "./index.module.scss";
import moment from "moment";

const Article = ({ articles, title }) => {
  return (
    <section className={styles.article}>
      <div className={styles.article__heading}>
        {!title || title === undefined ? <h1>News</h1> : <h1>{title}</h1>}
      </div>
      {articles ? (
        articles.map((article, index) => {
          const time = moment(article.publishedAt || moment.now())
            .fromNow()
            .slice(0, 1);
          return (
            <a href={article.url} key={index} target="_blank" rel="noopener">
              <article className={styles.article__main}>
                <div className={styles.article__title}>
                  <p>{article.title}</p>
                  <p className={styles.article__time}>{time}h ago</p>
                </div>
                {article.urlToImage ? (
                  <img
                    key={index}
                    src={article.urlToImage}
                    className={styles.article__img}
                    alt={`${article.title} image`}
                  />
                ) : (
                  <img
                    key={index}
                    src={`/youtube.png`}
                    className={styles.article__img}
                    alt={`${article.title} image`}
                  />
                )}
              </article>
            </a>
          );
        })
      ) : (
        <></>
      )}
    </section>
  );
};

type Props = {
  articles?: [
    article: {
      author: string;
      title: string;
      publishedAt: string;
      url: string;
      urlToImage: string;
    }
  ];
  title?: string;
  weatherNews?: {
    current: {
      temp: number;
      clouds: number;
      weather: [
        conditions: {
          main: string;
          icon: string;
        }
      ];
    };
    daily: [
      date: {
        dt: number;
        clouds: number;
        temp: {
          min: number;
          max: number;
        };
        weather: [
          conditions: {
            id: number;
            icon: string;
          }
        ];
      }
    ];
  };
};

export default Article;
