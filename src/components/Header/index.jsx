import { Input } from "../Input";
import { Container, Form, Profile } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <h2>RocketMovies</h2>

      <Form>
        <Input placeholder="Pesquise pelo Titulo" />
      </Form>
      <Profile>
        <Link to="/profile">
          <img
            src="https://github.com/jairtorezone.png"
            alt="Foto do usuário"
          />
        </Link>

        <div>
          <strong>Jair Torezone</strong>
          <Link to="/" onClick={signOut}>
            sair
          </Link>
        </div>
      </Profile>
    </Container>
  );
}
