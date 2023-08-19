// Types related to clusters
export type Cluster = "Lyria" | "Cygnus" | "Cassiope" | "Athenae";

export interface ClusterDetails {
  color: string;
  description: string;
  personality: string[];
  sign: string;
}

export interface Question {
  question: string;
  options: {
    text: string;
    cluster: Cluster;
  }[];
}
