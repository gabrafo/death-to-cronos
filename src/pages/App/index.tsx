import "../../styles/theme.css";
import "../../styles/global.css";

import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>Menu</Container>
      <Container>Form</Container>
      <Container>Footer</Container>
    </>
  );
}

export default App;
