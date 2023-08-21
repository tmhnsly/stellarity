import React from "react";
import styles from "./homePage.module.scss";
import { LinkButton } from "../../components/linkButton/LinkButton";

// import { LinkButton } from "../../components/linkButton/LinkButton";

const HomePage: React.FC = () => {
  return (
    <div className={styles.content}>
      <section className={styles.intro}>
        <div className={styles.textSection}>
          <h1 className={styles.heading}>Stellarity.</h1>
          <h2 className={styles.subheading}>Find your Cluster</h2>
          <p className={styles.description}>
            Embark on a journey of self-discovery and exploration through the
            cosmos with Stellarity. Uncover hidden facets of your personality,
            explore the stars, and find your unique cluster that resonates with
            who you are.
          </p>
        </div>
        <div className={styles.ctaBegin}>
          <LinkButton to="/quiz" theme="positive" mode="route" kind="border">
            Begin the Quiz
          </LinkButton>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
