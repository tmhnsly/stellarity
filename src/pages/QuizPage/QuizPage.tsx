import React, { useEffect } from "react";
import { useQuizLogic } from "../../hooks/useQuizLogic";
import { questions } from "../../constants/questions";
import styles from "./quizPage.module.scss";
import QuizOption from "../../components/quizOption/QuizOption";
import { Button } from "../../components/button/Button";
import { Text } from "../../components/text/Text";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

function QuizPage() {
  const {
    currentQuestion,
    handleAnswerSelection,
    handleNext,
    handlePrevious,
    progress,
    selectedAnswer,
  } = useQuizLogic();

  useEffect(() => {
    // Scroll to the top of the page when the progress changes (next question)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [progress]); // Trigger the effect when progress changes

  return (
    <section className={styles.section}>
      <h3 className={styles.questionNumber}>Question {progress + 1}</h3>
      <p className={styles.questionText}>{currentQuestion.question}</p>
      <form className={styles.quizOptions}>
        <div className={styles.flexContainer}>
          {currentQuestion.options.map((option, index) => (
            <QuizOption
              key={index}
              option={option}
              isSelected={selectedAnswer === option.cluster}
              onSelect={() => handleAnswerSelection(option.cluster)}
            />
          ))}
        </div>
      </form>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.prevButton}
          onClick={handlePrevious}
          theme="default"
          kind="solid"
          disabled={progress === 0}
        >
          <BiLeftArrowAlt size={24} />
          <Text size="regular" weight="medium">
            Previous
          </Text>
        </Button>
        <Button
          className={styles.nextButton}
          onClick={handleNext}
          theme="positive"
          kind="solid"
          disabled={!selectedAnswer}
        >
          <Text size="regular" weight="medium">
            {progress < questions.length - 1 ? "Next" : "Submit"}
          </Text>
          <BiRightArrowAlt size={24} />
        </Button>
      </div>
    </section>
  );
}

export default QuizPage;
