import { Input } from "../Input";
import { Container, Form, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>

      <Form>
        <Input placeholder="Pesquise pelo Titulo" />
      </Form>
      <Profile>
        <img src="https://github.com/jairtorezone.png" alt="Foto do usuário" />

        <div>
          <strong>Jair Torezone</strong>
          <a href="/">sair</a>
        </div>
      </Profile>
    </Container>
  );
}
