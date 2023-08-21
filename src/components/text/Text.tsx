// Text.tsx
import React from "react";
import styles from "./Text.module.scss";

interface TextProps {
  tag?: keyof JSX.IntrinsicElements;
  size:
    | "micro"
    | "xsmall"
    | "small"
    | "regular"
    | "medium"
    | "large"
    | "xlarge"
    | "jumbo";
  weight?: "regular" | "medium" | "bold";
  children: React.ReactNode;
  className?: string;
}

export const Text = ({
  tag = "p",
  size,
  weight,
  children,
  className,
}: TextProps) => {
  const Tag = tag;
  const combinedClassName = `${styles.text} ${styles[size]} ${
    weight === "bold" ? styles.bold : ""
  } ${className}`;

  return (
    <Tag data-size={size} data-weight={weight} className={combinedClassName}>
      {children}
    </Tag>
  );
};
