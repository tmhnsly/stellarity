import { useLocation } from "react-router-dom";
import { clustersDetails } from "../../constants/clusters";
import { Cluster } from "../../types";
import styles from "./resultsPage.module.css";

function ResultsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const cluster: Cluster | null = (params.get("cluster") as Cluster) || null;
  const clusterDetails = cluster ? clustersDetails[cluster] : null;

  const clusterClassName = cluster ? `${cluster.toLowerCase()}Cluster` : "";

  return (
    <div className={styles.resultsContainer}>
      {clusterDetails ? (
        <div
          className={`${styles.clusterContainer} ${styles[clusterClassName]}`}
        >
          <h2 className={styles.clusterTitle}>
            Welcome to the {cluster} Cluster!
          </h2>
          <p className={styles.clusterDescription}>
            {clusterDetails.description}
          </p>
        </div>
      ) : (
        <p className={styles.errorMessage}>
          Sorry, no cluster selected or the cluster is unknown.
        </p>
      )}
    </div>
  );
}

export default ResultsPage;
