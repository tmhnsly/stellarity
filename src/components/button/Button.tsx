import { concat } from "../../helpers/concat";
import styles from "./button.module.scss";

interface IButtonProps extends React.PropsWithChildren {
  theme?:
    | "default"
    | "negative"
    | "warning"
    | "positive"
    | "info"
    | "teal"
    | "transparent";
  kind?: "default" | "border" | "solid";
  size?: "small" | "medium" | "large";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean; // Add the disabled prop
}

export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  kind,
  theme,
  size,
  className,
  ariaLabel,
  disabled, // Include the disabled prop
}) => {
  return (
    <button
      className={concat(className, styles.button, disabled && styles.disabled)} // Apply the disabled style conditionally
      onClick={onClick}
      data-theme={theme}
      data-kind={kind}
      data-size={size}
      aria-label={ariaLabel}
      disabled={disabled} // Pass the disabled prop to the button element
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "default",
  kind: "default",
  size: "medium",
};
