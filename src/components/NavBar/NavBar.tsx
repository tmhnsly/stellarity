import styles from "./navBar.module.scss";
import { Button } from "../button/Button";
import { BiSolidSun, BiSolidMoon, BiPlanet } from "react-icons/bi";
import { useEffect } from "react";
import { Tooltip } from "../tooltip/Tooltip";
import { LinkButton } from "../linkButton/LinkButton";
import { useDarkMode } from "../../contexts/DarkModeProvider";

interface INavBarProps extends React.PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const NavBar: React.FC<INavBarProps> = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle darkMode using setDarkMode
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  return (
    <nav className={styles.navBar}>
      <Tooltip content={"Home"}>
        <LinkButton
          to="/"
          mode="nav"
          ariaLabel="Open homepage"
          theme="transparent"
        >
          <BiPlanet size={24} />
          Stellarity
        </LinkButton>
      </Tooltip>
      <div className={styles.links}>
        <LinkButton
          to="astroscope"
          mode="nav"
          ariaLabel="Open AstroScope page"
          theme="transparent"
        >
          AstroScope
        </LinkButton>
        <LinkButton
          to="quiz"
          mode="nav"
          ariaLabel="Open Quiz page"
          theme="transparent"
        >
          Quiz
        </LinkButton>
        <LinkButton
          to="about"
          mode="nav"
          ariaLabel="Open About page"
          theme="transparent"
        >
          About
        </LinkButton>
        <Tooltip content={"Toggle theme"}>
          <Button
            ariaLabel="Toggle theme"
            theme="transparent"
            onClick={toggleDarkMode}
          >
            {darkMode ? <BiSolidSun /> : <BiSolidMoon />}
          </Button>
        </Tooltip>
      </div>
    </nav>
  );
};
