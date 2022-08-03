import Link from "next/link";
import styles from "./index.module.scss";
import Image from "next/image";

const TOPICS = [
  {
    icon: "topStories",
    path: "/",
    title: "Top stories",
  },
  {
    icon: "business",
    path: "/topics/business",
    title: "Business",
  },
  {
    icon: "technology",
    path: "/topics/technology",
    title: "Technology",
  },
  {
    icon: "entertainment",
    path: "/topics/entertainment",
    title: "Entertainment",
  },
  {
    icon: "sports",
    path: "/topics/sports",
    title: "Sports",
  },
];

const Nav: React.FC = () => {
  return (
    <section className={styles.container}>
      <ul className={styles.contents}>
        {TOPICS.map((topic, index) => {
          return (
            <li key={index}>
              <Link href={`${topic.path}`}>
                <a>
                  <span>
                    <Image
                      src={`/topics/${topic.icon}.png`}
                      alt={`${topic.title} icon`}
                      loading="eager"
                      width={33}
                      height={33}
                      priority
                    />
                  </span>
                  <span>{topic.title}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Nav;
