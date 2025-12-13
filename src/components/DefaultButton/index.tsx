import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import styles from "./styles.module.css";

type DefaultButtonProps = { 
    state?: 'play' | 'pause';
} & React.ComponentProps<"button">;

/* "state" set to play by default */ 
export function DefaultButton({ state = 'play', ...props }: DefaultButtonProps) {
    const isPlay = state === 'play';
    const icon = isPlay ? <PlayCircleIcon /> : <StopCircleIcon />; /* "icon" receives different lucide-react element based on "state" */
    const styleClass = isPlay ? styles.play : styles.pause;
    
    return (
        <button className={`${styles.button} ${styleClass}`} {...props}> 
            {icon}
        </button>
    );
}