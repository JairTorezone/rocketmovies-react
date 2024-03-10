import { Input } from "../Input";
import { Container, Form, Profile } from "./styles";
import { Link } from "react-router-dom";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <h2>RocketMovies</h2>

      <Form>
        <Input placeholder="Pesquise pelo Titulo" />
      </Form>
      <Profile>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>

        <div>
          <strong>{user.name}</strong>
          <Link to="/" onClick={signOut}>
            sair
          </Link>
        </div>
      </Profile>
    </Container>
  );
}
