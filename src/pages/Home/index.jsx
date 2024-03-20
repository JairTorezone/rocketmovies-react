import { FaPlus } from "react-icons/fa6";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container, Content, Assessment } from "./styles";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div to="/movie/:id" className="titles">
          <h2>Meus Filmes </h2>
          <Link to="/movie">
            <FaPlus />
            Adicionar filme
          </Link>
        </div>

        <Assessment>
          <Card />
          <Card />
        </Assessment>
      </Content>
    </Container>
  );
}

export default Home;
