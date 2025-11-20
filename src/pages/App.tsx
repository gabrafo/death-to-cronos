import "../styles/theme.css"
import "../styles/global.css"

import style from "./App.module.css"

import melinoe from "../assets/melinoe.webp"

import { Heading } from "../components/Heading"
import { GoddessImage } from "../components/GoddessImage"
import { Salutation } from "../components/Salutation"

function App() {
  return (
    <>
      <Heading />

      <div className={style['goddess-container']}>
        <GoddessImage src={melinoe} width={5} height={5} alt="Melinoe, goddess of ghosts" />
        <Salutation>Melinoe says: death to Chronos!{/* The text is passing down as children of Salutation*/}</Salutation>
      </div>
    </>
  );
}

export default App;