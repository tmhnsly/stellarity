import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/quiz" className={styles.navLink}>
            Quiz
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/results" className={styles.navLink}>
            Results
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/demo" className={styles.navLink}>
            Demo
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
