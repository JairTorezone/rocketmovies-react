import { Input } from "../Input";
import { Container, Form, Profile } from "./styles";
import { Link } from "react-router-dom";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";
import { SearchContext } from "../../hooks/search";
import { useContext } from "react";

export function Header() {
  const { signOut, user } = useAuth();
  const searchMovie = useContext(SearchContext);

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function show() {
    console.log(searchMovie);
  }

  return (
    <Container>
      <Link to="/">RocketMovies</Link>

      <Form>
        <Input
          placeholder="Pesquise pelo Titulo"
          onChange={(e) => searchMovie.setSearchValue(e.target.value)}
          onClick={show}
        />
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
