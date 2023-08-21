import React, { useState } from "react";
import styles from "./quizOption.module.scss";

interface Option {
  text?: string;
  cluster: string;
  image?: string;
}

interface QuizOptionProps {
  option: Option;
  isSelected: boolean;
  onSelect: () => void;
}

function QuizOption({ option, isSelected, onSelect }: QuizOptionProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selectedCard : ""}`}
      onClick={onSelect}
    >
      <label className={styles.optionLabel}>
        <input
          type="radio"
          name="quizOption"
          value={option.cluster}
          checked={isSelected}
          onChange={() => {}}
          className={styles.optionInput}
        />
        <div className={styles.imageContainer}>
          {isLoading && <div className={styles.loadingSpinner}>Loading...</div>}
          {!isLoading && option.image && (
            <img
              src={option.image}
              alt={option.text}
              onLoad={handleImageLoad}
              className={styles.image}
            />
          )}
        </div>
        <span className={styles.optionText}>{option.text}</span>
      </label>
    </div>
  );
}

export default QuizOption;
