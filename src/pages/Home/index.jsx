import { FaPlus } from "react-icons/fa6";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

import { Container, Content, Assessment } from "./styles";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../hooks/search";

export function Home() {
  const [notes, setNotes] = useState([]);
  const searchMovie = useContext(SearchContext);

  const navigate = useNavigate();

  function handleOpenNoteMovie(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/movies?title=${searchMovie.searchValue}&tags`
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [searchMovie]);
  return (
    <Container>
      <Header />

      <Content>
        <div className="titles">
          <h2>Meus Filmes </h2>
          <Link to="/movie">
            <FaPlus />
            Adicionar filme
          </Link>
        </div>

        <Assessment>
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleOpenNoteMovie(note.id)}
            />
          ))}
        </Assessment>
      </Content>
    </Container>
  );
}

export default Home;
