import { FaPlus } from "react-icons/fa6";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";

import { Container, Content, Assessment } from "./styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

export function Home() {
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleOpenNoteMovie(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movies?title&tags`);
      setNotes(response.data);
    }

    fetchNotes();
  }, []);
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
