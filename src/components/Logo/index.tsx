import { HourglassIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useThemeStore, type ThemeName } from "../../stores/themeStore";

// Config for each theme
const themeConfig: Record<ThemeName, { icon: React.ReactNode; text: string }> = {
  chronos: {
    icon: <HourglassIcon className={styles.logoIcon} />,
    text: "Death to Chronos"
  },
  hades: {
    icon: <img src="/hades_sigil.webp" alt="Hades Sigil" className={styles.logoImage} />,
    text: "Domain of Hades"
  }
};

export function Logo() {
  const themeName = useThemeStore((state) => state.themeName);
  const currentTheme = themeConfig[themeName];

  return (
    <div className={styles.logo}>
      <a href="#" className={styles.logoLink}>
        {currentTheme.icon}
        <span>{currentTheme.text}</span>
      </a>
    </div>
  );
}