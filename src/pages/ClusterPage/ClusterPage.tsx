import { useLocation } from "react-router-dom";
import { clustersDetails } from "../../constants/clusters";
import { Cluster } from "../../types";
import { Text } from "../../components/text/Text";
import styles from "./clusterPage.module.scss";

function ClusterPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const cluster: Cluster | null = params.get("cluster") as Cluster | null;
  const clusterDetails = cluster ? clustersDetails[cluster] : null;

  const clusterClassName = cluster ? `${cluster.toLowerCase()}Cluster` : "";

  return (
    <div className={styles.content}>
      {clusterDetails ? (
        <div
          className={`${styles.clusterContainer} ${styles[clusterClassName]}`}
        >
          <div className={styles.textSection}>
            <Text tag="h1" size="regular" weight="bold">
              {cluster}:
            </Text>
            <Text size="small">{clusterDetails.personality}</Text>
            <Text tag="p" size="large" className={styles.clusterDescription}>
              {clusterDetails.description}
            </Text>
          </div>
        </div>
      ) : (
        <Text tag="p" size="medium" className={styles.errorMessage}>
          Sorry, no cluster selected or the cluster is unknown.
        </Text>
      )}
    </div>
  );
}

export default ClusterPage;
