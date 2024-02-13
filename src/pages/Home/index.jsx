import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container, Content, Assessment } from "./styles";

function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <h2>Meus Filmes</h2>

        <Assessment>
          <Card />
          <Card />
        </Assessment>
      </Content>
    </Container>
  );
}

export default Home;
