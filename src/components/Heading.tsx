import styles from "./Heading.module.css"

interface HeadingProps {
    children: string;
}

export function Heading(props: HeadingProps) {
    return <h1 className={styles.heading}>{props.children}</h1>;
}