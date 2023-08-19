// useQuizLogic.ts

import { useState } from "react";
import { Cluster, Question } from "../types";
import { questions } from "../constants/questions";
import { useNavigate } from "react-router-dom";
import { determineDominantCluster } from "../helpers/quizHelpers";

export function useQuizLogic() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedClusters, setSelectedClusters] = useState<Cluster[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<Cluster | null>(null);

  const navigate = useNavigate();

  const currentQuestion: Question = questions[currentQuestionIndex];
  const progress = currentQuestionIndex;

  const handleAnswerSelection = (selectedCluster: Cluster) => {
    setSelectedAnswer(selectedCluster);
    setSelectedClusters((prevSelectedClusters) => [
      ...prevSelectedClusters,
      selectedCluster,
    ]);
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null); // Clear the selected answer for the next question
    } else {
      const determinedDominantCluster =
        determineDominantCluster(selectedClusters);
      navigate(`/results?cluster=${determinedDominantCluster}`);
    }
  };

  return {
    currentQuestion,
    handleAnswerSelection,
    handleNext,
    progress,
    selectedAnswer,
  };
}
