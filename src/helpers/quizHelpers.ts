// helpers/quizHelpers.ts
import { Cluster } from "../types";

export const determineDominantCluster = (answers: Cluster[]): Cluster => {
  const counts: { [key: string]: number } = {};
  let dominantCluster = answers[0];

  answers.forEach((answer) => {
    counts[answer] = (counts[answer] || 0) + 1;
    if (counts[answer] > counts[dominantCluster]) {
      dominantCluster = answer;
    }
  });

  return dominantCluster;
};
