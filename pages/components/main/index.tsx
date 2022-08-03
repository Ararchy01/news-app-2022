import Header from "../header";
import styles from "./index.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

function Main({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Main;
