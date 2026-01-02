import styles from "./styles.module.css";

export function Footer() {
  return (
  <footer className={styles.footer}>
    <p>
      Game assets &copy; <a href="https://www.supergiantgames.com/" target="_blank" rel="noopener noreferrer">Supergiant Games</a>. 
      Fan project, non-commercial.
    </p>
    <p><a href="https://www.linkedin.com/in/gafagundes/">LinkedIn</a> | <a href="https://github.com/gabrafo">GitHub</a></p>
  </footer>
  );
}
