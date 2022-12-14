import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        {/* <div className={styles.header__icon}>
          <Image
            src="/menu.png"
            alt="menu icon"
            loading="eager"
            width={35}
            height={35}
            priority
          />
        </div> */}
        <h1 style={{ letterSpacing: "1px" }}>
          <Link href="/">
            <a>
              <span style={{ fontWeight: 250 }}>News</span>
              <span style={{ fontWeight: 100 }}>App</span>
            </a>
          </Link>
        </h1>
      </header>
    </section>
  );
};

export default Header;
