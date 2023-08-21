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
      setSelectedAnswer(null);
    } else {
      const determinedDominantCluster =
        determineDominantCluster(selectedClusters);
      setSelectedAnswer(null);
      console.log("Navigating to results page");
      navigate(`/cluster?cluster=${determinedDominantCluster}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
    }
  };

  return {
    currentQuestion,
    handleAnswerSelection,
    handleNext,
    handlePrevious,
    progress,
    selectedAnswer,
  };
}
