import styles from "./aboutPage.module.css";

function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <h2 className={styles.aboutTitle}>About Stellarity</h2>
      <p className={styles.aboutText}>
        Welcome to <span className={styles.aboutHighlight}>Stellarity</span>,
        where the mysteries of the universe intertwine with the complexities of
        the human soul.
      </p>
      <p className={styles.aboutText}>
        For eons, mankind has looked up to the stars, seeking answers and
        pondering our place in the grand tapestry of existence.{" "}
        <span className={styles.aboutHighlight}>Stellarity</span> is born from
        this very curiosity — a bridge between the vast, uncharted reaches of
        the cosmos and the deep, introspective realms of human emotion and
        thought.
      </p>
      <p className={styles.aboutText}>
        We believe that just as stars and galaxies hold secrets of the universe,
        each individual carries a universe within themselves, waiting to be
        explored. By harnessing the power of cosmic symbolism and the insights
        of personality theory,{" "}
        <span className={styles.aboutHighlight}>Stellarity</span> offers a novel
        pathway for self-discovery.
      </p>
      <p className={styles.aboutText}>
        Our mission is to guide you on a cosmic voyage of introspection, helping
        you navigate the celestial constellations of your inner self. Whether
        you're a seasoned astronomer of the soul or just embarking on your
        stellar journey,{" "}
        <span className={styles.aboutHighlight}>Stellarity</span> is here to
        illuminate your path.
      </p>
      <p className={styles.aboutText}>
        Join us as we traverse this unique intersection of stars and psyche, and
        together, let's chart the galaxies within.
      </p>
    </div>
  );
}

export default AboutPage;
