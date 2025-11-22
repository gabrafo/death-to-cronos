import { HourglassIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return <div className={styles.logo}>
    <a href="#" className={styles.logoLink}>
      < HourglassIcon/>
      <span>Death to Chronos</span>
    </a>
  </div>;
}