import { Link } from "react-router-dom";
import DemoPage from "../DemoPage/DemoPage"; // Import the DemoPage component
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.homePage}>
        <h1 className={styles.homeTitle}>Welcome to Stellarity</h1>
        <p className={styles.homeText}>
          Discover your cosmic cluster based on our unique set of questions. Are
          you ready to journey through the stars?
        </p>
        <Link to="/quiz" className={styles.beginButton}>
          Begin the Quiz
        </Link>
      </div>

      <DemoPage />
    </div>
  );
}

export default HomePage;
