import { HistoryIcon, HouseIcon, SettingsIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useThemeStore, type ThemeName } from "../../stores/themeStore";
import hadesIcon from "../../assets/hades.png";
import chronosIcon from "../../assets/hades2.png";

const themeToggleConfig: Record<ThemeName, { icon: string; alt: string; title: string }> = {
  chronos: { icon: hadesIcon, alt: "Switch to Hades", title: "Activate Hades theme" },
  hades: { icon: chronosIcon, alt: "Switch to Chronos", title: "Activate Chronos theme" }
};

export function Menu() {
  // Get state and action from Zustand store
  const themeName = useThemeStore((state) => state.themeName);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const toggleConfig = themeToggleConfig[themeName];

  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLink}>
        <HouseIcon />
      </a>
      <a href="#" className={styles.menuLink}>
        <HistoryIcon />
      </a>
      <a href="#" className={styles.menuLink}>
        <SettingsIcon />
      </a>
      
      {/* Theme toggle button */}
      <button 
        className={styles.menuLink}
        onClick={toggleTheme}
        title={toggleConfig.title}
        type="button"
      >
        <img 
          src={toggleConfig.icon} 
          alt={toggleConfig.alt} 
          className={styles.menuIcon}
        />
      </button>
    </nav>
  );
}