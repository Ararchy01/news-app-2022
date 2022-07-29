import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>News App 2022</title>
        <meta name="description" content="Daichi Araki Portfolio 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 style={{ letterSpacing: "1px", textAlign: "left" }}>
          <span style={{ fontWeight: 250 }}>News App</span>
        </h1>
      </header>
      <main className={styles.main}>
        <p>Main</p>
      </main>
      <footer className={styles.footer}>
        <a href="https://github.com/Ararchy01" target="_blank">
          <p>Footer</p>
        </a>
      </footer>
    </div>
  );
}
