import "../styles/theme.css"
import "../styles/global.css"
import style from "./App.module.css"

import { Heading } from "../components/Heading"
import { GoddessImage } from "../components/GoddessImage"
import melinoe from "../assets/melinoe.webp"

function App() {
  return (
    <>
      <Heading />

      <div className={style['goddess-container']}>
        <GoddessImage src={melinoe} width={5} height={5} alt="Melinoe, goddess of ghosts" />
        <p>Melinoe says: death to Chronos!</p>
      </div>
    </>
  );
}

export default App;