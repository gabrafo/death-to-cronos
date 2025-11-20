import style from "./GoddessImage.module.css"

interface GoddessImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}
    
// Using props for the GoddessImage component
export function GoddessImage({ src, width, height, alt }: GoddessImageProps) {
    return (
        <img src={src} alt={alt} className={style.avatar} style={{width: `${width}rem`, height: `${height}rem`}}/>
    );
}