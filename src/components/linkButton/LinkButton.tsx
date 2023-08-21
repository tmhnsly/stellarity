import { Link, NavLink } from "react-router-dom";
import { concat } from "../../helpers/concat";
import styles from "./linkButton.module.scss";

interface ILinkButtonProps extends React.PropsWithChildren {
  to: string;
  mode?: "route" | "nav" | "external";
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
  className?: string;
  ariaLabel?: string;
}

export const LinkButton: React.FC<ILinkButtonProps> = ({
  mode,
  to,
  children,
  kind,
  theme,
  size,
  className,
  ariaLabel,
}) => {
  return (
    <>
      {mode === "route" && (
        <Link
          to={to}
          className={concat(className, styles.link)}
          data-theme={theme}
          data-kind={kind}
          data-size={size}
          aria-label={ariaLabel}
          data-mode={mode}
        >
          {children}
        </Link>
      )}
      {mode === "nav" && (
        <NavLink
          to={to}
          className={concat(className, styles.link)}
          data-theme={theme}
          data-kind={kind}
          data-size={size}
          aria-label={ariaLabel}
          data-mode={mode}
        >
          {children}
        </NavLink>
      )}
      {mode === "external" && (
        <a
          href={to}
          target="_blank"
          className={concat(className, styles.link)}
          data-theme={theme}
          data-kind={kind}
          data-size={size}
          aria-label={ariaLabel}
          data-mode={mode}
        >
          {children}
        </a>
      )}
    </>
  );
};

LinkButton.defaultProps = {
  theme: "default",
  kind: "default",
  size: "medium",
  mode: "external",
};
