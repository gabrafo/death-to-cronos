import styles from "./Container.module.css"

interface ContainerProps {
    children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  return (
      <div className={styles.container}> {/* Used for limiting width, and aligning to the center of the page */}
        <div className={styles.content}>
          <section>
            {props.children}
          </section>
        </div>
      </div>
  );
}