import "../../styles/theme.css";
import "../../styles/global.css";

import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";
import { CountDown } from "../../components/CountDown";
import { DefaultInput } from "../../components/DefaultInput";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput id="task" labelText="Task" type="text" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <p>Cycles:</p>
            <p>0 0 0 0 0 </p>
          </div>

          <div className="formRow">
            <button>Send</button>
          </div>
        </form>      
      </Container>
    </>
  );
}

export default App;
