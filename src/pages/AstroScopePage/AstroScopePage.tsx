import useOpenAi from "../../hooks/useOpenAi";
import { clustersDetails } from "../../constants/clusters";
import { Cluster } from "../../types";
import { Button } from "../../components/button/Button";
import styles from "./astroscopePage.module.css";

function AstroScopePage() {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const { data, isLoading, callOpenAiAPI } = useOpenAi(apiKey);

  return (
    <div className={styles.astroscopePage}>
      <h1>Astroscope</h1>
      <div className={styles.buttonContainer}>
        {Object.keys(clustersDetails).map((clusterName) => (
          <Button
            key={clusterName}
            onClick={() => callOpenAiAPI(clusterName as Cluster)}
            kind="border"
            theme="info"
          >
            {clusterName}
          </Button>
        ))}
      </div>
      {isLoading ? <div>Loading...</div> : data !== "" && <p>{data}</p>}
    </div>
  );
}

export default AstroScopePage;
