import { useQuizLogic } from "../../hooks/useQuizLogic";
import { questions } from "../../constants/questions";
import styles from "./quizPage.module.css";

function QuizPage() {
  const {
    currentQuestion,
    handleAnswerSelection,
    handleNext,
    progress,
    selectedAnswer,
  } = useQuizLogic();

  return (
    <div className={styles.quizPage}>
      <h2 className={styles.quizTitle}>Stellarity Quiz</h2>

      <h3 className={styles.questionNumber}>Question {progress + 1}</h3>
      <p className={styles.questionText}>{currentQuestion.question}</p>
      <form>
        {currentQuestion.options.map((option, index) => (
          <label className={styles.optionLabel} key={index}>
            <input
              type="radio"
              name="quizOption"
              value={option.cluster}
              checked={selectedAnswer === option.cluster}
              onChange={() => handleAnswerSelection(option.cluster)}
              className={styles.optionInput}
            />
            <span
              className={
                selectedAnswer === option.cluster
                  ? styles.selectedOptionText
                  : styles.optionText
              }
            >
              {option.text}
            </span>
          </label>
        ))}
      </form>
      {progress < questions.length - 1 ? (
        <button className={styles.submitButton} onClick={handleNext}>
          Next
        </button>
      ) : (
        <button className={styles.submitButton} onClick={handleNext}>
          Submit
        </button>
      )}
    </div>
  );
}

export default QuizPage;
