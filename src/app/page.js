import HomePage from "./components/Home/HomePage.component";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
    </div>
  );
}
