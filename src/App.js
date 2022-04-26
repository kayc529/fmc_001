import { Container } from './components/styles/Container.styled';
import Button from './components/styles/Button.styled';
import { Header, Logo, Nav } from './components/styles/Header.styled';
import logoImg from './images/logo.svg';

function App() {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Logo src={logoImg} alt='logo' />
            <Button>Try It Free</Button>
          </Nav>
        </Container>
      </Header>
    </>
  );
}

export default App;
